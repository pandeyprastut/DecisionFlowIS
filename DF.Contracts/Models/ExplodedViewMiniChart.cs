using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DF.Contracts.Models
{
    public class ExplodedViewMiniChart
    {
        public int DeliverableMaterialID { get; set; }
        public DateTime DueDateSunday { get; set; }
        public double? CurrentStock { get; set; }
        public double? AverageWeeklyDemand { get; set; }
        public double? Projected { get; set; }
        public double? Delta { get; set; }
    }
}
