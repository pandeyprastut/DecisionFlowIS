using DF.Contracts.Models;
using System.Collections.Generic;

namespace DF.Contracts.Response
{
    public class ExplodedViewMiniChartResponse: ResponseBase
    {
        public IEnumerable<ExplodedViewMiniChart> Result { get; set; }
      
    }
}
