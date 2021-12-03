using DataProvider.ServiceInterfaces;
using DF.Contracts.Response;
//using DF.Users.Authorization;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using DF.Contracts.Request;
using DF.Contracts.Models;

namespace DecisionFlow.Controllers
{
    //[Authorize]
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ExplodedViewController : Controller
    {
        IExplodedView _explodedView;

        public ExplodedViewController(IExplodedView explodedView)
        {
            _explodedView = explodedView;

        }

        [HttpPost]
        public async Task<DeliverableListResponse> GetAllDeliverables(CommonFilter filter)
        {
            var retObj = new DeliverableListResponse();

            try
            {
                retObj.Result = filter.LocationID==0 ? await _explodedView.GetAllDeliverableInfo() : await _explodedView.GetDeliverableInfoByFilter(filter);
                return retObj;
            }
            catch (System.Exception ex)
            {
                List<ResponseErrors> errors = new List<ResponseErrors>();
                errors.Add(new ResponseErrors
                {
                    Code = "-1",
                    Description = ex.Message,
                    Type = "Error"
                });
                return new DeliverableListResponse { IsSuccess = false, Error = errors };
            }

        }

        [HttpPost]
        public async Task<ExplodedViewDataResponse> GetGridData(ExplodedViewFilter filter)
        {
            try
            {
                var retObj = new ExplodedViewDataResponse();
                retObj.Result = await _explodedView.GetGridData(filter);
                return retObj;
            }
            catch (System.Exception ex)
            {

                List<ResponseErrors> errors = new List<ResponseErrors>();
                errors.Add(new ResponseErrors
                {
                    Code = "-1",
                    Description = ex.Message,
                    Type = "Error"
                });

                return new ExplodedViewDataResponse { IsSuccess = false, Error = errors };
            }
        }

        [HttpPost]
        public async Task<ExplodedViewMiniChartResponse> GetHeaderChartData(ExplodedViewFilter filter)
        {
            try
            {
                var retObj = new ExplodedViewMiniChartResponse();
                retObj.Result = await _explodedView.GetHeaderChartData(filter);
                return retObj;
            }
            catch (System.Exception ex)
            {

                List<ResponseErrors> errors = new List<ResponseErrors>();
                errors.Add(new ResponseErrors
                {
                    Code = "-1",
                    Description = ex.Message,
                    Type = "Error"
                });

                return new ExplodedViewMiniChartResponse { IsSuccess = false, Error = errors };
            }
        }

        [HttpGet]
        public async Task<ExplodedViewHeaderResponse> GetHeaderData(int deliverableMaterialID)
        {
            try
            {
                var retObj = new ExplodedViewHeaderResponse();
                retObj.Result = await _explodedView.GetHeaderData(deliverableMaterialID);
                return retObj;
            }
            catch (System.Exception ex)
            {

                List<ResponseErrors> errors = new List<ResponseErrors>();
                errors.Add(new ResponseErrors
                {
                    Code = "-1",
                    Description = ex.Message,
                    Type = "Error"
                });

                return new ExplodedViewHeaderResponse { IsSuccess = false, Error = errors };
            }


        }

        [HttpPost]
        public async Task<ExplodedBuyPartsTrendResponse> GetBuyPartsTrend(ExplodedViewFilter filter)
        {
            try
            {
                var retObj = new ExplodedBuyPartsTrendResponse();
                retObj.Result = await _explodedView.GetBuyPartsTrend(filter);
                return retObj;
            }
            catch (System.Exception ex)
            {

                List<ResponseErrors> errors = new List<ResponseErrors>();
                errors.Add(new ResponseErrors
                {
                    Code = "-1",
                    Description = ex.Message,
                    Type = "Error"
                });

                return new ExplodedBuyPartsTrendResponse { IsSuccess = false, Error = errors };
            }
        }

        [HttpPost]
        public async Task<ExplodedBuyPartsDetailResponse> GetBuyPartDetails(ExplodedViewFilter filter)
        {
            try
            {
                var retObj = new ExplodedBuyPartsDetailResponse();
                retObj.Result = await _explodedView.GetBuyPartDetails(filter);
                return retObj;
            }
            catch (System.Exception ex)
            {

                List<ResponseErrors> errors = new List<ResponseErrors>();
                errors.Add(new ResponseErrors
                {
                    Code = "-1",
                    Description = ex.Message,
                    Type = "Error"
                });

                return new ExplodedBuyPartsDetailResponse { IsSuccess = false, Error = errors };
            }
        }
    }

}
