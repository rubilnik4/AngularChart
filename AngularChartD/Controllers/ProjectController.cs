using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularChartD.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AngularChartD.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectController : ControllerBase
    {
        ApplicationContext _context;

        public ProjectController(ApplicationContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IEnumerable<Project>> Get()
        {
            return await _context.Projects.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<Project> Get(int id)
        {
            return await _context.Projects.FirstOrDefaultAsync(x => x.Id == id);
        }
    }
}