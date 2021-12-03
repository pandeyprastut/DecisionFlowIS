using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DF.Contracts.Models
{
    public class DeliverableInfo
    {
        public int MaterialID { get; set; }

        public string Deliverable { get; set; }

        public string Description { get; set; }

        public string SourceType { get; set; }

        public string Planner { get; set; }

        public decimal? Cost { get; set; }

        public string CustomerList { get; set; }

        public string ProgramList { get; set; }
    }
}
