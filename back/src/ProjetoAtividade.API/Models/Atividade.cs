using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjetoAtividade.API.Models
{
    public class Atividade
    {
        public int id { get; set; }
        public string titulo { get; set; }
        public string descricao { get; set; }
        public Prioridade prioridade { get; set; }

        public Atividade(){

        }
        public Atividade(int id){
            this.id = id;
        }
    }
}