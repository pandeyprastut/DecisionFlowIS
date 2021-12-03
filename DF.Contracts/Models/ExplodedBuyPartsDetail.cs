using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DF.Contracts.Models
{
    public class ExplodedBuyPartsDetail
    {
        public int MaterialID { get; set; }

        public string PartNumber { get; set; }

        public string Description { get; set; }

        public double? AverageDailyDemand { get; set; }

        public double? AverageWeeklyDemand { get; set; }

        public string AbcValue { get; set; }

        public double? ABCDays { get; set; }

        public double? TargetStockUnits { get; set; }

        public double? CurrentStock { get; set; }

        public int? TotalQuantityDue { get; set; }

        public double? OpenOrdersNeed { get; set; }

        public double? VendorLeadTime { get; set; }

        public string PrimaryVendorName { get; set; }

        public string Address { get; set; }

        public string Email { get; set; }

        public string PhoneNumber { get; set; }

        public double? PeriodGap { get; set; }

        public string MostRecentBuyer { get; set; }
    }
}
