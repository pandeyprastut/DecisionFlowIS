using DF.Contracts.Models;
using System.Collections.Generic;

namespace DF.Contracts.Response
{
    public class ExplodedViewDataResponse : ResponseBase
    {
        public IEnumerable<ExplodedViewData> Result { get; set; }

    }
}
