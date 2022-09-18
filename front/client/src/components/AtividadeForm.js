import React, { useEffect, useState } from 'react'



function AtividadeForm(props) {

    const atividadeInicial = {
        id: 0,
        titulo: '',
        prioridade: '0',
        descricao: '',
    }

    const [atividade, setAtividade] = useState(atividadeAtual())

    useEffect(() => {
        if (props.ativSelecionada.id !== 0) setAtividade(props.ativSelecionada)
    }, [props.ativSelecionada])

    const inputTextHandler = (e) => {
        const { name, value } = e.target;
        setAtividade({ ...atividade, [name]: value })
    }

    const handlerCancelar = (e) => {
        e.preventDefault();
        props.cancelarAtividade()
        setAtividade(atividadeInicial)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(props.ativSelecionada.id !== 0)
            props.atualizarAtividade(atividade)
        else
            props.addAtividade(atividade)

        setAtividade(atividadeInicial)
    }

    function atividadeAtual() {
        if (props.ativSelecionada.id !== 0) {
            console.log(props.ativSelecionada.id)
            return props.ativSelecionada
        }
        else {
            console.log(atividadeInicial.id)
            return atividadeInicial
        }
    }

    return (
        <>
            <form className='row g-3' onSubmit={handleSubmit}>
                {/* <div className='col-md-6'>
                <label className='form-label'>id</label>
                <input id='id' className='form-control' type='text' placeholder=''
                    // readOnly
                    name='id'
                    onChange={inputTextHandler}
                    value={atividade.id}
                />
            </div> */}

                <div className='col-md-6'>
                    <label className='form-label'>Título</label>
                    <input id='titulo' className='form-control' type='text' placeholder=''
                        name='titulo'
                        onChange={inputTextHandler}
                        value={atividade.titulo}
                    />
                </div>

                <div className='col-md-6'>
                    <label className='form-label'>Prioridade</label>
                    <select id='prioridade' className='form-select' type='text' placeholder='id'
                        name='prioridade'
                        onChange={inputTextHandler}
                        value={atividade.prioridade}
                    >
                        <option defaultValue='0'>Selecione...</option>
                        <option value='1'>Baixa</option>
                        <option value='2'>Normal</option>
                        <option value='3'>Alta</option>
                    </select>
                </div>

                <div className='col-md-12'>
                    <label className='form-label'>Descrição</label>
                    <textarea id='descricao' className='form-control' type='text' placeholder=''
                        name='descricao'
                        onChange={inputTextHandler}
                        value={atividade.descricao}
                    />
                <hr />
                </div>

                <div className='col-12 mt-1'>
                    {atividade.id === 0 ? (
                        <button className='btn btn-outline-secondary' type='submit'>
                            <i className='fas fa-plus me-2' />
                            Atividade
                        </button>
                    )
                        : (
                            <>
                                <button type='submit' className='btn btn-outline-success me-2'>
                                    <i className='fas fa-plus me-2' />
                                    Salvar
                                </button>
                                <button className='btn btn-outline-warning' onClick={handlerCancelar}>
                                    <i className='fas fa-close me-2' />
                                    Cancelar
                                </button>
                            </>
                        )
                    }

                </div>

            </form>
        </>
    )
}

export default AtividadeForm

