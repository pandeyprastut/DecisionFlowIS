using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DF.Contracts.Request
{
    public class ExplodedViewFilter:CommonFilter
    {
        public int DeliverableMaterialID { get; set; }
    }
}
