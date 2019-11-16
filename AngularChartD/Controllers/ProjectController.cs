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

        [HttpPost]       
        public async Task<IActionResult> Post([FromBody]Project project)
        {
            if (ModelState.IsValid)
            {              
                await _context.Projects.AddAsync(project);
                await _context.SaveChangesAsync();
                return Ok(project);
            }
            return BadRequest(ModelState);
        }

        [HttpPut("{id}")]      
        public async Task<IActionResult> Put(int id, [FromBody]Project project)
        {           
            if (ModelState.IsValid)
            {               
                _context.Update(project);
                await _context.SaveChangesAsync();
                return Ok(project);
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]        
        public async Task<IActionResult> Delete(int id)
        {          
            Project project = await _context.Projects.FirstOrDefaultAsync(x => x.Id == id);
            if (project != null)
            {
                _context.Projects.Remove(project);
                await _context.SaveChangesAsync();
            }
            return Ok(project);
        }
    }
}