using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DF.Contracts.Models
{
    public class ExplodedViewData
    {
        public string Index { get; set; }

        public int MaterialID { get; set; }

        public string PartNumber { get; set; }

        public string Description { get; set; }

        public short BillOfMaterialLevel { get; set; }

        public double? AverageDailyDemand { get; set; }

        public double? AverageWeeklyDemand { get; set; }

        public string SourceType { get; set; }

        public double? ActualCompletion { get; set; }

        public double? ProjectedCompletion { get; set; }

        public double? TargetCompletion { get; set; }

        public double? CurrentStock { get; set; }

        public double? TargetStockUnits { get; set; }

        public double? CurrentWIPUnits { get; set; }

        public double? TargetWIPUnits { get; set; }

        public double? ShortBuyItems { get; set; }

        public double? Quality { get; set; }

        public double? FlowBalance { get; set; }

        public double? DFScore { get; set; }

        public double? ShortageWeeksAway { get; set; }

        public double? UnitsImpacted { get; set; }

    }
}
