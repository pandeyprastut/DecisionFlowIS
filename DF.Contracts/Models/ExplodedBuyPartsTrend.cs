using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DF.Contracts.Models
{
    public class ExplodedBuyPartsTrend
    {
        public int? MaterialID { get; set; }

        public DateTime? DueDateSunday { get; set; }

        public int? QuantityOrdered { get; set; }

        public int? QuantityDue { get; set; }

        public int? QuantityRecieved { get; set; }

        public double? AverageWeeklyDemand { get; set; }

        public double? TargetStock { get; set; }

        public double? ProjectedQuantity { get; set; }
    }
}
