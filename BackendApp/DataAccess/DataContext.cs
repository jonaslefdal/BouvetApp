using BouvetApp.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace BouvetApp.DataAccess
{
    public class DataContext : DbContext
    {

        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<API>().ToTable("api").HasKey(x => x.apiId);

            base.OnModelCreating(modelBuilder);

        }

        public DbSet<API> API { get; set; }





    }
}