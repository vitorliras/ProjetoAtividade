using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProjetoAtividade.API.Models;

namespace ProjetoAtividade.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AtividadeController : ControllerBase
    {
        public IEnumerable<Atividade> atividades =  new List<Atividade>(){
            new Atividade(1),
            new Atividade(2),
            new Atividade(3)
        };

        [HttpGet]
        public IEnumerable<Atividade> Get(){
            return atividades;
        }

        [HttpGet("{id}")]
        public Atividade Get(int id){
            return atividades.FirstOrDefault(x => x.id == id);
        }

        [HttpPost]
        public IEnumerable<Atividade> post(Atividade atv){
            return atividades.Append<Atividade>(atv);
        }

        [HttpPut("{id}")]
        public Atividade Put(int id, Atividade atv){
            atv.id=atv.id+1;
           return atv;
        }

        [HttpDelete("{id}")]
        public string Delete(int id){
            return $"back DELETE {id}";
        }
    }
}