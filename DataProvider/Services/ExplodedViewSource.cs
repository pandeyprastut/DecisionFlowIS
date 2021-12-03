using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;
using DataProvider.ServiceInterfaces;
using Microsoft.Extensions.Configuration;
using utilities;
using DF.Contracts.Models;
using DF.Contracts.Request;

namespace DataProvider.Services
{
    public class ExplodedViewSource : IExplodedView
    {
        private readonly IConfiguration _configuration;
        public ExplodedViewSource(IConfiguration configutation)
        {
            //_mapper = mapper;
            _configuration = configutation;
        }
        public async Task<IEnumerable<DeliverableInfo>> GetDeliverableInfoByFilter(CommonFilter filter)
        {
            try
            {
                List<DeliverableInfo> result;
               

                string connectionString = _configuration.GetConnectionString("DefaultConnection");

                using (var conn = new SqlConnection(connectionString))
                {

                    using (var cmd = new SqlCommand("dbo.GetDeliverableInfo", conn))
                    {

                        cmd.CommandType = CommandType.StoredProcedure;
                       
                        cmd.Parameters.AddWithValue("@filter", filter.ToJSON());

                        cmd.CommandTimeout = 750;
                        conn.Open();

                        using (var reader = await cmd.ExecuteReaderAsync(CommandBehavior.CloseConnection))
                        {
                            result = reader.Automap<DeliverableInfo>();
                        }
                    }
                }

                return result;
            }
            catch (Exception ex)
            {

                throw ex;

            }
        }
        public async Task<IEnumerable<DeliverableInfo>> GetAllDeliverableInfo()
        {
            try
            {
                List<DeliverableInfo> result;               

                string connectionString = _configuration.GetConnectionString("DefaultConnection");

                using (var conn = new SqlConnection(connectionString))
                {

                    using (var cmd = new SqlCommand("SELECT MaterialID,Deliverable,[Description],SourceType,Planner,Cost,CustomerList,ProgramList FROM [dbo].[udf_GetAllDeliverableInfo] ()", conn))
                    {

                        cmd.CommandType = CommandType.Text;
                        cmd.CommandTimeout = 750;
                        conn.Open();

                        using (var reader = await cmd.ExecuteReaderAsync(CommandBehavior.CloseConnection))
                        {
                            result = reader.Automap<DeliverableInfo>();
                        }
                    }
                }

                return result;
            }
            catch (Exception ex)
            {

                throw ex;

            }
        }
        public async Task<IEnumerable<ExplodedViewData>> GetGridData(ExplodedViewFilter filter)
        {
            try
            {
                List<ExplodedViewData> result;


                string connectionString = _configuration.GetConnectionString("DefaultConnection");

                using (var conn = new SqlConnection(connectionString))
                {

                    using (var cmd = new SqlCommand("dbo.GetExplodedViewData", conn))
                    {

                        cmd.CommandType = CommandType.StoredProcedure;

                        cmd.Parameters.AddWithValue("@filter", filter.ToJSON());

                        cmd.CommandTimeout = 750;
                        conn.Open();

                        using (var reader = await cmd.ExecuteReaderAsync(CommandBehavior.CloseConnection))
                        {
                            result = reader.Automap<ExplodedViewData>();
                        }
                    }
                }

                return result;
            }
            catch (Exception ex)
            {

                throw ex;

            }
        }
        public async Task<IEnumerable<ExplodedBuyPartsDetail>> GetBuyPartDetails(ExplodedViewFilter filter)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<ExplodedBuyPartsTrend>> GetBuyPartsTrend(ExplodedViewFilter filter)
        {
            throw new NotImplementedException();
        }

      

      

        public async Task<IEnumerable<ExplodedViewMiniChart>> GetHeaderChartData(ExplodedViewFilter filter)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<ExplodedViewHeader>> GetHeaderData(int deliverableMaterialID)
        {
            throw new NotImplementedException();
        }
    }
}
