using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AngularChartD.Models
{
    public class Project
    {
        public int Id { get; set; }

        [Required]
        public string Сompany { get; set; }

        [Required]
        public int TargetProjects { get; set; }

        [Required]
        public int CompleteProjects { get; set; }

        [Required]
        [Column(TypeName = "date")]
        public DateTime Date { get; set; }
    }
}
