/**
 * Demo datasets behind the "Look inside" product screens. Mirrors DIV Home v14.
 * cols: [label, align 'l'|'r', mono 0|1, amountTone?, kind? ('av' avatar | 'pill')]
 * Optional per shot: banner, stages, rail (+ totals), kpis — the screen adapts to what exists.
 */
export const statusTone = {
  "Approved": "#0FA36B", "Pending": "#FF8A3D", "Implementation": "#2F6BFF", "Active": "#0FA36B", "Churned": "#9A94A6", "Order approved": "#6A5AE0", "Termination": "#8B8595",
  "Paid": "#0FA36B", "Overdue": "#E23434", "Due soon": "#FF8A3D", "Draft": "#9A94A6", "Sent": "#2F6BFF", "Part paid": "#FF8A3D",
  "Online": "#0FA36B", "Offline": "#9A94A6", "Suspended": "#E23434", "Grace": "#FF8A3D",
  "Open": "#2F6BFF", "In progress": "#FF8A3D", "Escalated": "#E23434", "Resolved": "#0FA36B"
};

export const shots = [
  {
    label: "Connect CRM", url: "connect.div.app/connections", accent: "#FF0B55",
    tabs: ["Connections", "Leads"], action: "New connection", searchHint: "Search customers or circuit IDs",
    cap: "Connect CRM — every link from commercial approval to active billing, in one pipeline.",
    nav: [["OV", "Overview"], ["CN", "Connections"], ["CU", "Customers"], ["BL", "Billing"], ["RP", "Reports"]],
    tableTitle: "Connections", statusIdx: 4, grid: "1.3fr 2.2fr 0.8fr 1fr 1.1fr 0.8fr 0.7fr",
    cols: [["OID", "l", 1], ["CUSTOMER", "l", 0, null, "av"], ["SERVICE", "l", 0], ["BANDWIDTH", "r", 1], ["STATUS", "l", 0], ["TELCO", "l", 0], ["ACTION", "r", 0, null, "pill"]],
    banner: { label: "Revenue (demo)", delta: "-4.5% vs last month", value: "₹1.33", unit: "Cr", stamp: "SEPT 26", bars: [[22, "rgba(255,255,255,0.32)"], [26, "rgba(255,255,255,0.32)"], [19, "rgba(255,255,255,0.32)"], [31, "rgba(255,255,255,0.32)"], [24, "rgba(255,255,255,0.32)"], [28, "rgba(255,255,255,0.32)"], [34, "rgba(255,255,255,0.32)"], [21, "rgba(255,255,255,0.32)"], [29, "rgba(255,255,255,0.32)"], [25, "rgba(255,255,255,0.32)"], [33, "rgba(255,255,255,0.32)"], [27, "rgba(255,255,255,0.32)"], [20, "rgba(255,255,255,0.32)"], [30, "rgba(255,255,255,0.32)"], [23, "rgba(255,255,255,0.32)"], [36, "#FF7A3D"]] },
    stages: [
      { n: "1", l: "Commercial approval", sub: "Awaiting sign-off", v: "0", delta: "+2", f: "Pending", bg: "#FDF2E2", border: "#F5E3C9", badgeBg: "#F2A600", badgeInk: "#fff" },
      { n: "2", l: "Order approved", sub: "Docs ready to generate", v: "5", delta: "+1", f: "Order approved", bg: "#EFECFA", border: "#E2DCF5", badgeBg: "#6A5AE0", badgeInk: "#fff" },
      { n: "3", l: "Implementation", sub: "Provisioning in field", v: "119", delta: "+11", f: "Implementation", bg: "#E8F1FB", border: "#D7E6F7", badgeBg: "#2F6BFF", badgeInk: "#fff" },
      { n: "4", l: "Active links", sub: "Live and billing", v: "502", delta: "+37", f: "Active", bg: "#E6F5EC", border: "#D3EADD", badgeBg: "#0FA36B", badgeInk: "#fff" },
      { n: "L", l: "Termination pending", sub: "Notice served, still billing", v: "24", delta: "-3", f: "Termination", bg: "#FBFAF8", border: "#E8E4DC", badgeBg: "#F3EFE7", badgeInk: "#8B8595" },
      { n: "L", l: "Churned", sub: "Disconnected this year", v: "73", delta: "+4", f: "Churned", bg: "#FBFAF8", border: "#E8E4DC", badgeBg: "#F3EFE7", badgeInk: "#8B8595" }
    ],
    rows: [
      ["FAB210920261B7W", "VIBERNET DEMO INTERNET LTD", "DNC", "155 Mbps", "Approved", "Airtel", "View"],
      ["FAB20092026LUL1", "BAKE TOWN DEMO", "DNC", "155 Mbps", "Approved", "Airtel", "View"],
      ["FAB20092026AKZ2", "BHOMIKA DEMO NETWORK LTD", "DNC", "500 Mbps", "Approved", "Airtel", "View"],
      ["FAB200920261ZHZ", "SYSWALL DEMO TELECOM LTD", "DNC", "45 Mbps", "Implementation", "Airtel", "View"],
      ["FAB190920264QK8", "NORTHWIND DEMO MEDIA", "Fibre", "880 Mbps", "Implementation", "Tata", "View"],
      ["FAB190920267PM3", "HARBOUR DEMO SOLUTIONS", "Fibre", "512 Mbps", "Order approved", "Jio", "View"],
      ["FAB180920262XC9", "PIXEL DEMO COMPUTE", "DNC", "155 Mbps", "Pending", "Tata", "View"],
      ["FAB180920269TR4", "EASTGATE DEMO ENTERPRISES", "Fibre", "1024 Mbps", "Active", "Airtel", "View"],
      ["FAB170920265WB7", "BAKER STREET DEMO HOTELS", "Fibre", "100 Mbps", "Active", "Jio", "View"],
      ["FAB170920261QD2", "MERIDIAN DEMO TELELINE", "Fibre", "750 Mbps", "Active", "Airtel", "View"],
      ["FAB160920268NF5", "ORBIT DEMO TELECOM", "DNC", "2048 Mbps", "Active", "Tata", "View"],
      ["FAB160920263VJ1", "SILVERLINE DEMO LOGISTICS", "Fibre", "300 Mbps", "Termination", "Jio", "View"],
      ["FAB150920267LK6", "GREENFIELD DEMO TEXTILES", "Fibre", "200 Mbps", "Pending", "Airtel", "View"],
      ["FAB150920264HS8", "CEDARPOINT DEMO FOODS", "Fibre", "150 Mbps", "Churned", "Jio", "View"]
    ]
  },
  {
    label: "BahiKhata", url: "bahikhata.div.app/receivables", accent: "#B3341F",
    cap: "BahiKhata — every rupee owed to you, aged by bucket and mapped to the manager who owns the chase.",
    nav: [["OV", "Overview"], ["RC", "Receivables"], ["PY", "Payables"], ["LG", "Ledger"], ["GS", "GST"]],
    tabs: ["Receivables", "Payables"], action: "Onboard customer", searchHint: "Search customers or managers",
    tableTitle: "All customers", statusIdx: -1, grid: "2fr 1.1fr 1fr 1fr 0.8fr 0.8fr 0.9fr",
    cols: [["CUSTOMER", "l", 0], ["MANAGER", "l", 0], ["TOTAL O/S", "r", 1], ["CURRENT", "r", 1], ["30+", "r", 1, "#F2A600"], ["60+", "r", 1, "#F2653C"], ["90+", "r", 1, "#C22617"]],
    totals: ["ALL CUSTOMERS · 14 (DEMO)", "", "₹36,99,838", "₹29,13,376", "₹1,27,094", "₹89,147", "₹5,70,221"],
    rail: {
      headLabel: "OWED TO YOU · DEMO", headValue: "₹36,99,838", headSub: "14 demo customers",
      bar: [["78.7%", "#3F3A33"], ["3.4%", "#F2A600"], ["2.4%", "#F2653C"], ["15.4%", "#C22617"]],
      buckets: [["Current", "₹29,13,376", "79%", "#3F3A33"], ["30+ days", "₹1,27,094", "3.4%", "#F2A600"], ["60+ days", "₹89,147", "2.4%", "#F2653C"], ["90+ days", "₹5,70,221", "15.4%", "#C22617"]],
      tileLabel: "IN TERMS", tileValue: "79%",
      alertLabel: "90+ DAYS", alertValue: "₹5,70,221", alertSub: "4 demo accounts to chase today"
    },
    rows: [
      ["SKYLINE NETCOM DEMO PVT LTD", "Demo Manager A", "₹1,94,640", "₹1,69,165", "₹0", "₹0", "₹25,475"],
      ["RIVERSIDE CABLE DEMO", "Demo Manager A", "₹2,65,830", "₹2,65,830", "₹0", "₹0", "₹0"],
      ["EVERNET DEMO SOLUTIONS", "Demo Manager A", "₹2,58,542", "₹2,58,541", "₹0", "₹1", "₹0"],
      ["LOTUS WI-FI DEMO BROADBAND", "Demo Manager A", "₹0", "₹0", "₹0", "₹0", "₹0"],
      ["AIRLOOP DEMO COMMUNICATION", "Demo Manager A", "₹16,862", "₹16,862", "₹0", "₹0", "₹0"],
      ["SANDSTONE TELECOM DEMO LTD", "Demo Manager B", "₹3,34,541", "₹3,32,151", "₹0", "₹2,390", "₹0"],
      ["WAVEGRID DEMO BROADBAND", "Demo Manager B", "₹2,83,790", "₹49,194", "₹6,094", "₹2,756", "₹2,25,746"],
      ["NORTHWIND DEMO MEDIA", "Demo Manager B", "₹4,12,300", "₹1,72,300", "₹48,000", "₹32,000", "₹1,60,000"],
      ["MERIDIAN DEMO TELELINE", "Demo Manager B", "₹5,60,118", "₹5,60,118", "₹0", "₹0", "₹0"],
      ["ORBIT DEMO TELECOM", "Demo Manager C", "₹8,41,905", "₹7,96,905", "₹45,000", "₹0", "₹0"],
      ["GREENFIELD DEMO TEXTILES", "Demo Manager C", "₹1,02,300", "₹74,300", "₹28,000", "₹0", "₹0"],
      ["LAKEVIEW DEMO DIAGNOSTICS", "Demo Manager C", "₹2,05,470", "₹41,470", "₹0", "₹52,000", "₹1,12,000"],
      ["ANAND DEMO MOTORS", "Demo Manager C", "₹1,44,600", "₹1,44,600", "₹0", "₹0", "₹0"],
      ["CEDARPOINT DEMO FOODS", "Demo Manager D", "₹78,940", "₹31,940", "₹0", "₹0", "₹47,000"]
    ]
  },
  {
    label: "InvoicePro", url: "invoicepro.div.app/invoices", accent: "#0FA36B",
    tabs: ["Invoices", "Quotes"], action: "New invoice", searchHint: "Search invoices or clients",
    cap: "InvoicePro — outstanding, billed and drafted across the financial year at a glance.",
    nav: [["OV", "Overview"], ["IN", "Invoices"], ["QT", "Quotes"], ["CL", "Clients"], ["TX", "Tax"]],
    tableTitle: "Invoices", statusIdx: 4, grid: "1fr 2fr 0.9fr 1fr 1.1fr 0.9fr",
    cols: [["INVOICE", "l", 1], ["CLIENT", "l", 0], ["RAISED", "l", 1], ["AMOUNT", "r", 1], ["STATUS", "l", 0], ["GST", "r", 1]],
    kpis: [
      { l: "Outstanding", v: "₹27.9L", s: "sent, unpaid", f: "Sent", tone: "#2F6BFF" },
      { l: "Overdue", v: "₹9.4L", s: "chase list", f: "Overdue", tone: "#E23434" },
      { l: "Paid (FY)", v: "₹3.62Cr", s: "realised", f: "Paid", tone: "#0FA36B" },
      { l: "Drafts", v: "14", s: "not yet issued", f: "Draft", tone: "#9A94A6" }
    ],
    rows: [
      ["INV-2411", "Northwind Media Networks", "01 Sep", "₹4,20,000", "Sent", "18%"],
      ["INV-2414", "Harbour Solutions Sales", "03 Sep", "₹1,36,000", "Paid", "18%"],
      ["INV-2418", "Pixel Compute", "06 Sep", "₹92,500", "Overdue", "18%"],
      ["INV-2421", "Eastgate Enterprises", "09 Sep", "₹2,70,000", "Sent", "18%"],
      ["INV-2425", "Baker Street Hotels", "11 Sep", "₹58,400", "Draft", "—"],
      ["INV-2429", "Meridian Teleline Pvt Ltd", "12 Sep", "₹6,15,000", "Paid", "18%"],
      ["INV-2433", "Orbit Telecommunications", "14 Sep", "₹8,40,000", "Sent", "18%"],
      ["INV-2437", "Silverline Logistics", "16 Sep", "₹1,10,000", "Overdue", "18%"],
      ["INV-2440", "Greenfield Textiles", "17 Sep", "₹74,200", "Draft", "—"],
      ["INV-2444", "Cedar Point Foods", "18 Sep", "₹3,02,000", "Paid", "18%"],
      ["INV-2448", "Lakeview Diagnostics", "19 Sep", "₹1,88,000", "Sent", "18%"],
      ["INV-2452", "Anand Motors Group", "20 Sep", "₹2,24,500", "Sent", "18%"]
    ]
  },
  {
    label: "Bharat RADIUS", url: "radius.div.app/subscribers", accent: "#2F6BFF",
    tabs: ["Subscribers", "Resellers"], action: "Add subscriber", searchHint: "Search username or reseller",
    cap: "Bharat RADIUS — reseller branches, site nodes and subscriber sessions on one multi-tenant portal.",
    nav: [["OV", "Overview"], ["SB", "Subscribers"], ["RS", "Resellers"], ["NA", "NAS"], ["PL", "Plans"]],
    tableTitle: "Subscriber sessions", statusIdx: 4, grid: "1.1fr 1.5fr 1fr 1fr 1fr 0.9fr",
    cols: [["USERNAME", "l", 1], ["RESELLER", "l", 0], ["PLAN", "l", 0], ["SESSION", "r", 1], ["STATUS", "l", 0], ["DATA", "r", 1]],
    kpis: [
      { l: "Online now", v: "8,412", s: "live sessions", f: "Online", tone: "#0FA36B" },
      { l: "Grace period", v: "271", s: "expiring plans", f: "Grace", tone: "#FF8A3D" },
      { l: "Suspended", v: "96", s: "non-payment", f: "Suspended", tone: "#E23434" },
      { l: "Offline", v: "3,058", s: "no active session", f: "Offline", tone: "#9A94A6" }
    ],
    rows: [
      ["ktr_1042@div", "Kothari Broadband", "FUP 150 Mbps", "04:12:09", "Online", "18.4 GB"],
      ["ktr_1088@div", "Kothari Broadband", "FUP 100 Mbps", "00:48:31", "Online", "2.1 GB"],
      ["vsn_2210@div", "Vision Netcom", "Unlimited 200", "11:02:47", "Online", "46.8 GB"],
      ["vsn_2247@div", "Vision Netcom", "FUP 50 Mbps", "—", "Offline", "0 GB"],
      ["amt_3301@div", "Amrit Telelinks", "FUP 150 Mbps", "02:19:55", "Grace", "9.6 GB"],
      ["amt_3346@div", "Amrit Telelinks", "Unlimited 300", "07:41:12", "Online", "72.3 GB"],
      ["skn_4120@div", "Sky Net Services", "FUP 100 Mbps", "—", "Suspended", "0 GB"],
      ["skn_4178@div", "Sky Net Services", "FUP 50 Mbps", "01:07:20", "Online", "4.4 GB"],
      ["rjn_5011@div", "Rajan Fibernet", "Unlimited 200", "09:33:04", "Online", "51.2 GB"],
      ["rjn_5064@div", "Rajan Fibernet", "FUP 150 Mbps", "—", "Grace", "12.7 GB"],
      ["mgl_6008@div", "Mangal Broadband", "FUP 100 Mbps", "03:56:41", "Online", "15.9 GB"],
      ["mgl_6042@div", "Mangal Broadband", "FUP 50 Mbps", "—", "Offline", "0 GB"]
    ]
  },
  {
    label: "Samadhan", url: "samadhan.div.app/tickets", accent: "#FF8A3D",
    tabs: ["Tickets", "Field visits"], action: "New ticket", searchHint: "Search tickets or customers",
    cap: "Samadhan — ticket load per agent, escalations and resolution time, live off the support desk.",
    nav: [["OV", "Overview"], ["TK", "Tickets"], ["FD", "Field"], ["SL", "SLA"], ["AG", "Agents"]],
    tableTitle: "Tickets", statusIdx: 4, grid: "1fr 1.8fr 1fr 1fr 1.1fr 0.9fr",
    cols: [["TICKET", "l", 1], ["CUSTOMER", "l", 0], ["AGENT", "l", 0], ["SLA LEFT", "r", 1], ["STATUS", "l", 0], ["PRIORITY", "l", 0]],
    kpis: [
      { l: "Open", v: "142", s: "unassigned + queued", f: "Open", tone: "#2F6BFF" },
      { l: "In progress", v: "86", s: "agent working", f: "In progress", tone: "#FF8A3D" },
      { l: "Escalated", v: "11", s: "SLA at risk", f: "Escalated", tone: "#E23434" },
      { l: "Resolved today", v: "204", s: "avg 3h 12m", f: "Resolved", tone: "#0FA36B" }
    ],
    rows: [
      ["SM-8841", "Northwind Media Networks", "R. Iyer", "01:12", "Escalated", "P1"],
      ["SM-8845", "Harbour Solutions Sales", "K. Desai", "04:38", "In progress", "P2"],
      ["SM-8849", "Pixel Compute", "A. Bhatt", "08:05", "Open", "P3"],
      ["SM-8853", "Eastgate Enterprises", "R. Iyer", "00:44", "Escalated", "P1"],
      ["SM-8857", "Baker Street Hotels", "S. Menon", "—", "Resolved", "P3"],
      ["SM-8861", "Meridian Teleline Pvt Ltd", "K. Desai", "06:21", "In progress", "P2"],
      ["SM-8865", "Orbit Telecommunications", "A. Bhatt", "12:00", "Open", "P3"],
      ["SM-8869", "Silverline Logistics", "S. Menon", "02:55", "In progress", "P2"],
      ["SM-8873", "Greenfield Textiles", "R. Iyer", "—", "Resolved", "P3"],
      ["SM-8877", "Cedar Point Foods", "K. Desai", "09:47", "Open", "P3"],
      ["SM-8881", "Lakeview Diagnostics", "A. Bhatt", "01:58", "In progress", "P1"],
      ["SM-8885", "Anand Motors Group", "S. Menon", "—", "Resolved", "P2"]
    ]
  }
];
