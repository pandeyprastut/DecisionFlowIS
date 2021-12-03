using DF.Contracts.Models;
using System.Collections.Generic;

namespace DF.Contracts.Response
{
    public class ExplodedBuyPartsDetailResponse : ResponseBase
    {
        public IEnumerable<ExplodedBuyPartsDetail> Result { get; set; }
    }
}
