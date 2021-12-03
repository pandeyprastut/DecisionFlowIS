using DF.Contracts.Request;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DF.Contracts.Models;

namespace DataProvider.ServiceInterfaces
{
    public interface IExplodedView
    {
        Task<IEnumerable<DeliverableInfo>> GetAllDeliverableInfo();
        Task<IEnumerable<DeliverableInfo>> GetDeliverableInfoByFilter(CommonFilter filter);
        Task<IEnumerable<ExplodedViewData>> GetGridData(ExplodedViewFilter filter);
        Task<IEnumerable<ExplodedViewMiniChart>> GetHeaderChartData(ExplodedViewFilter filter);
        Task<IEnumerable<ExplodedViewHeader>> GetHeaderData(int deliverableMaterialID);
        Task<IEnumerable<ExplodedBuyPartsTrend>> GetBuyPartsTrend(ExplodedViewFilter filter);
        Task<IEnumerable<ExplodedBuyPartsDetail>> GetBuyPartDetails(ExplodedViewFilter filter);
    }
}
