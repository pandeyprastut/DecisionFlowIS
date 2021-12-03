using DF.Contracts.Models;
using System.Collections.Generic;

namespace DF.Contracts.Response
{
    public class ExplodedViewHeaderResponse : ResponseBase
    {
       public IEnumerable<ExplodedViewHeader> Result { get; set; }          
    }
}
