using Microsoft.EntityFrameworkCore;
using ProjetoAtividade.API.Models;

namespace ProjetoAtividade.API.Data
{
    public class DataContext : DbContext
    {
        public DbSet<Atividade> atividades { get; set; }

        public DataContext(DbContextOptions<DataContext> options) : base(options){}
    }
}