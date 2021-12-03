using DF.Contracts.Models;
using System.Collections.Generic;

namespace DF.Contracts.Response
{
    public class DeliverableListResponse:ResponseBase
    {
        public IEnumerable<DeliverableInfo> Result { get; set; }
    }
}
