Try out the website : [SQL Editor](https://sql-editor-210.netlify.app/)

## 👨‍🔧 Tech Stack

React 
TailwindCSS

## 👨‍💻 Features
- `1) Users can get data of any of the predefined SQL queries either by using SQL Editor or Sidebar Menu.`
- `2) Users can sort data directly by clicking the Table Headers title.`
- `3) Users can navigate to different pages using pagination.`


## ✍️ Predefined SQL Queries

- `select * from customers`
- `select * from categories`
- `select * from employee_territories`
- `select * from order_details`
- `select * from orders`
- `select * from products`
- `select * from regions`
- `select * from shippers`
- `select * from suppliers`
- `select * from territories`

##⏱ Page Load Time

`Page Load time of this website in desktop is coming as 0.3 s

I calculated the performance and load time of this website using PageSpeed Insights.`
![image](https://user-images.githubusercontent.com/87414843/170837721-a4c2576b-8e9e-41be-82ae-27b18dea6a4c.png)

##🪜 Steps I took to optimize the page load time
- `1)Used code-splitting with React.Lazy() and Suspense to lazy load the components and split javaScript into multiple chunks using Dynamic runtime Imports for faster page load.`
- `2)Used React.Memo() to optimize the render performance of functional components.`
