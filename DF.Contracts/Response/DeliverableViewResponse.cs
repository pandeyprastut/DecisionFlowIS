using DF.Contracts.Models;
using System.Collections.Generic;

namespace DF.Contracts.Response
{
    public class DeliverableViewResponse:ResponseBase
    {
        public IEnumerable<DeliverableView> Result { get; set; }
    }
}
