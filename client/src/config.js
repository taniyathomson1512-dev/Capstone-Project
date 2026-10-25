export const appConfig = {
  "name": "Personal Finance Tracker",
  "short": "MoneyMap",
  "description": "Record income and expenses, categorise transactions, and understand cash flow.",
  "collection": "transactions",
  "singular": "transaction",
  "fields": [
    {
      "name": "title",
      "label": "Transaction title",
      "type": "text",
      "required": true,
      "options": []
    },
    {
      "name": "amount",
      "label": "Amount (INR)",
      "type": "number",
      "required": true,
      "options": []
    },
    {
      "name": "kind",
      "label": "Type",
      "type": "select",
      "required": true,
      "options": [
        "Income",
        "Expense"
      ]
    },
    {
      "name": "category",
      "label": "Category",
      "type": "select",
      "required": true,
      "options": [
        "Food",
        "Travel",
        "Education",
        "Bills",
        "Salary",
        "Shopping",
        "Other"
      ]
    },
    {
      "name": "date",
      "label": "Date",
      "type": "date",
      "required": true,
      "options": []
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "text",
      "required": false,
      "options": []
    }
  ],
  "sample": [
    {
      "title": "Monthly allowance",
      "amount": 8000,
      "kind": "Income",
      "category": "Salary",
      "date": "2026-10-01",
      "notes": "Monthly income"
    }
  ]
};
