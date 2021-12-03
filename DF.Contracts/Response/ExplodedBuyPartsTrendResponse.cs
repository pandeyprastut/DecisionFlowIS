using DF.Contracts.Models;
using System.Collections.Generic;

namespace DF.Contracts.Response
{
    public class ExplodedBuyPartsTrendResponse : ResponseBase
    {
        public IEnumerable<ExplodedBuyPartsTrend> Result { get; set; }
    }
}
