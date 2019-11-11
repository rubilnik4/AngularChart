using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularChartD.Models
{
    public class ApplicationContext: DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options)
          : base(options)
    {
        Database.EnsureCreated();
    }

    public DbSet<Project> Projects { get; set; }
}
}
