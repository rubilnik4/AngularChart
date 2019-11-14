using AngularChartD.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AngularChartD
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            string connectionString = "Server=(localdb)\\mssqllocaldb;Database=AngularChart;Trusted_Connection=True;";
            services.AddDbContext<ApplicationContext>(options => options.UseSqlServer(connectionString));

            services.AddCors(options =>
            {
                options.AddPolicy("EnableCORS", builder =>
                {
                    builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod().AllowCredentials().Build();
                });
            });

            services.AddMvc()
            .AddJsonOptions(options =>
            {
                options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
            })
            .SetCompatibilityVersion(CompatibilityVersion.Version_2_2)
            ;

            // In production, the Angular files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/dist";
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ApplicationContext context)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");

                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseCors("EnableCORS");

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "api/{controller}/{action}/{id?}");
            });

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseAngularCliServer(npmScript: "start");
                }
            });
            InitializeDB(context).Wait();
        }

        private async Task InitializeDB(ApplicationContext context)
        {
            var RequestTask = await context.Projects.AnyAsync();
            if (RequestTask == false)
            {
                await context.Projects.AddRangeAsync(new List<Project>()
                {
                    new Project
                    {
                        Contractor ="ООО Север",
                        CompleteProjects = 1,
                        TargetProjects = 3,
                        Date = new DateTime(2018, 5, 1),
                    },
                    new Project
                    {
                        Contractor ="ООО Юг",
                        CompleteProjects = 2,
                        TargetProjects = 4,
                        Date = new DateTime(2018, 5, 1),
                    },
                    new Project
                    {
                        Contractor ="ООО Запад",
                        CompleteProjects = 3,
                        TargetProjects = 4,
                        Date = new DateTime(2018, 5, 1),
                    },
                    new Project
                    {
                        Contractor ="ООО Восток",
                        CompleteProjects = 4,
                        TargetProjects = 5,
                        Date = new DateTime(2018, 5, 1),
                    },

                    new Project
                    {
                        Contractor ="ООО Север",
                        CompleteProjects = 2,
                        TargetProjects = 5,
                        Date = new DateTime(2018, 6, 1),
                    },
                    new Project
                    {
                        Contractor ="ООО Юг",
                        CompleteProjects = 3,
                        TargetProjects = 4,
                        Date = new DateTime(2018, 6, 1),
                    },
                    new Project
                    {
                        Contractor ="ООО Запад",
                        CompleteProjects = 1,
                        TargetProjects = 3,
                        Date = new DateTime(2018, 6, 1),
                    },
                    new Project
                    {
                        Contractor ="ООО Восток",
                        CompleteProjects = 3,
                        TargetProjects = 5,
                        Date = new DateTime(2018, 6, 1),
                    },
                });
                await context.SaveChangesAsync();
            }
        }
    }
}
