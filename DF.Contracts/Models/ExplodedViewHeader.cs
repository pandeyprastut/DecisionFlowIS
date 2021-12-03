using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DF.Contracts.Models
{
    public class ExplodedViewHeader
    {
        public int DeliverableMaterialID { get; set; }
        public string Deliverable { get; set; }
        public string Description { get; set; }
        public string CustomerList { get; set; }
        public string ProgramList { get; set; }
        public double? ConstrainingMake { get; set; }
        public double? ConstrainingBuy { get; set; }
        public double? HealthyParts { get; set; }
    }
}
