using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System.Data;
using WebApplication2.models;
using Microsoft.AspNetCore.Cors;

namespace WebApplication2.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("CorsPolicy")]
    [ApiController]
    public class newapiController : ControllerBase
    {

        private readonly IConfiguration _configuration;

        public newapiController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"select EmpId, Name, Address, Department from TestTable";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("WebApplication2");

            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {

                    SqlDataAdapter dap = new SqlDataAdapter(myCommand.CommandText, myCon);

                    dap.Fill(table);
                }

                return new JsonResult(table);
            }
        }

        [HttpPost]
        public ActionResult Post(newapi newapi)
        {
            string query = "INSERT INTO TestTable(EmpId,Name,Address,Department) VALUES(@EmpId,@Name,@Address,@Department)";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("WebApplication2");

            try
            {
                using (SqlConnection myCon = new SqlConnection(sqlDataSource))
                {
                    using (SqlCommand myCommand = new SqlCommand(query, myCon))
                    {
                        myCommand.Parameters.Add("@EmpId", SqlDbType.NChar).Value = newapi.EmpId;
                        myCommand.Parameters.Add("@Name", SqlDbType.NChar).Value = newapi.Name;
                        myCommand.Parameters.Add("@Address", SqlDbType.NChar).Value = newapi.Address;
                        myCommand.Parameters.Add("@Department", SqlDbType.NChar).Value = newapi.Department;


                        myCon.Open();
                        int result = myCommand.ExecuteNonQuery();
                        if (result < 0)
                            Console.WriteLine("Error inserting data into Database!");
                    }



                    // return new JsonResult("added sucessfully");
                    return Ok(newapi);
                }
            }
            catch (Exception ex)
            {

                throw;
            }
        }

        [HttpPut]
        public JsonResult Put(newapi newapi)
        {
            string query = @"
           UPDATE TestTable SET EmpId =@EmpId, Name =@Name, Department =@Department, Address =@Address Where  EmpId =@EmpId or Name =@Name
              ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("WebApplication2");

            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.Add("@EmpId", SqlDbType.NChar).Value = newapi.EmpId;
                    myCommand.Parameters.Add("@Name", SqlDbType.NChar).Value = newapi.Name;
                    myCommand.Parameters.Add("@Address", SqlDbType.NChar).Value = newapi.Address;
                    myCommand.Parameters.Add("@Department", SqlDbType.NChar).Value = newapi.Department;
                    myCon.Open();
                    int result = myCommand.ExecuteNonQuery();
                    if (result < 0)
                        Console.WriteLine("Error inserting data into Database!");
                }

                return new JsonResult("updated");
            }
        }

        [HttpDelete()]
        public JsonResult delete(newapi newapi)
        {
            string query = @"
            delete TestTable where EmpId=@EmpId
              ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("WebApplication2");

            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.Add("@EmpId", SqlDbType.NChar).Value = newapi.EmpId;
                    myCon.Open();
                    int result = myCommand.ExecuteNonQuery();
                    if (result < 0)
                        Console.WriteLine("Error deleting data into Database!");
                }

                return new JsonResult("deleted");
            }
        }

    }
}
