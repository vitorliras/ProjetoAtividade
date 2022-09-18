using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProjetoAtividade.API.Models;
using ProjetoAtividade.API.Data;

namespace ProjetoAtividade.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AtividadeController : ControllerBase
    {
        private readonly DataContext _context;

        public AtividadeController(DataContext context)
        {
            _context = context;
        }       

        [HttpGet]
        public IEnumerable<Atividade> Get(){
            return _context.atividades;
        }

        [HttpGet("{id}")]
        public Atividade Get(int id){
            return _context.atividades.FirstOrDefault(x => x.id == id);
        }

        [HttpPost]
        public Atividade post(Atividade atv){

            _context.atividades.Add(atv);
            if(_context.SaveChanges() > 0)
                return atv;
            else
                throw new Exception("Não foi possivel salvar o cadastro");
        }

        [HttpPut("{id}")]
        public Atividade Put(int id, Atividade atv){
            if(atv.id != id)
                throw new Exception("Arividade atualizada errada");
           _context.Update(atv);

           if(_context.SaveChanges() > 0)
                return _context.atividades.FirstOrDefault(x => x.id == id);
            else
                return new Atividade();
        }

        [HttpDelete("{id}")]
        public bool Delete(int id){
            var atividade = _context.atividades.FirstOrDefault(x => x.id == id);
            if(atividade == null)
                throw new Exception("deletando uma atividade que não existe");

            _context.Remove(atividade);

            return _context.SaveChanges() > 0;
        }
    }
}