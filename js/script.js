const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})

var textMain = [
  `
  Leveraging a sophisticated FEES module, we will enable tight control over the reconciliation
  of agent invoices to existing schedules and internal transaction volumes, identifying redundant 
  account charges and automating complex billing processes.Read more about Cost Management.
  `,
  `
  Due diligence is often a very complex, demanding and drawn-out process, consuming a great deal 
  of time and effort. It could become a straightforward procedure to sit comfortably beside other 
  operations with a substantial reduction in stress upon resources. 
  `,
  `
  An efficient, comprehensive and cost-effective technology solution will reduce time-to-market, 
  enhancing the Client experience and providing transparency and accountability throughout the 
  process. 
  `,
  `
  As with so many elements in operations, greater complexity by market, account and product, 
  coupled with increased volumes are driving the need for automation of processes. We can 
  help you improve efficiency and the integration of intelligent data across functions. 
  `,
  `
  A tight rein on counterparty execution and service is vital to your business. There must 
  be firm control of compliance with service requirements. Automating issue servicing across 
  the company is a sure route to drive that process and monitor the performance of your counterparties.
  `,
  `
  You need comprehensive reporting, to the finest detail and in a manner that you require, 
  that will present your data as intelligence. Immediate generation of bespoke reports will 
  take your efficiency, response times and proactivity to the next level.                   
  `,
];

var textMore = [
  "Cost Management",
  "Due Diligence",
  "Client Onboarding",
  "Account Workflow and Automation",
  "Performance Oversight",
  "Reporting",
];