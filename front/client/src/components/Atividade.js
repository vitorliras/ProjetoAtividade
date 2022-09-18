import React from 'react'
import { Card, Badge } from 'react-bootstrap';



function Atividade(props) {

  // function prioridadeLabel(param) {
  //   switch (param) {
  //     case 'Baixa':
  //       return 'Baixa'
  //     case '2':
  //       return 'Normal'
  //     case '3':
  //       return 'Alta'
  //     default:
  //       return 'Não definido'
  //   }
  // }

  function prioridadeIcons(param) {
    switch (param) {
      case 'Baixa':
        return 'smile'
      case 'Normal':
        return 'meh'
      case 'Alta':
        return 'frown'
      default:
        return 'Não definido'
    }
  }

  return (
    <Card className={'shadow-sm mb-2 card' + prioridadeIcons(props.atv.prioridade)} key={props.atv.id}>
      <Card.Body>
        <div className='d-flex justify-content-between me-2'>
          <Card.Title>
            <Badge style={{ height: '25px' }} pill bg="secondary">{props.atv.id}</Badge>
            - {props.atv.titulo}
          </Card.Title>

          <h6 style={{ fontSize: '15px' }} >Prioridade:
            <span className='prioridade ms-1'>
              <i className={"me-1 fa-regular fa-face-" + prioridadeIcons(props.atv.prioridade)}></i>{props.atv.prioridade}
            </span>
          </h6>
        </div>
        <Card.Text>
          {props.atv.descricao}
        </Card.Text>
        <div className='d-flex justify-content-end me-2 border-top pt-2 m-0'>
          <button
            className='btn btn-sn btn-outline-primary me-2'
            onClick={() => props.pegarAtividade(props.atv.id)}>
            <i className="fa-solid fa-pen me-2"></i>
            Editar
          </button>
          <button
            className='btn btn-sn btn-outline-danger'
            onClick={() => props.handleConfirmModal(props.atv.id)}>
            <i className="fa-solid fa-trash me-2"></i>
            Deletar
          </button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default Atividade

