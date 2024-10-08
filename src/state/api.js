import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const baselink=process.env.REACT_APP_BASE_URL
export const api =createApi({
    baseQuery:fetchBaseQuery({baseUrl:baselink}),
    reducerPath:"adminApi",
    tagTypes:["User", "Products", "Customers", "Transactions", "Geography", "Overview", "Admins", "Performance", "Dashboard"],
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': `${baselink}`,
    },
    endpoints:(build)=>({
        getUser: build.query({
            query: (id)=>`/general/user/${id}`,
            providesTags: ["User"], 
        }),
        getProducts: build.query({
            query: ()=>"/client/products",
            providesTags: ["Products"], 
        }),
        getCustomers: build.query({
            query: ()=>"/client/customers",
            providesTags:["Customers"],
        }),
        getTransactions: build.query({
            query:({page,pageSize,sort,search})=>({
                url:"/client/transactions",
                method:"GET",
                params:{page,pageSize,sort,search},
            }),
            providesTags:["Transactions"]
        }),
        getGeography: build.query({
            query: ()=>"/client/geography",
            providesTags:["Geography"],
        }),
        getOverview: build.query({
            query: ()=>"/sales/overview",
            providesTags:["Overview"],
        }),
        getAdmins: build.query({
            query: ()=>"/management/admins",
            providesTags:["Admins"],
        }),
        getPerformance: build.query({
            query: (id)=>`/management/performance/${id}`,
            providesTags:["Performance"],
        }),
        getDashboard: build.query({
            query: ()=>"/general/dashboard",
            providesTags:["Dashboard"],
        })
    })
})

export const{
    useGetUserQuery,
    useGetProductsQuery,
    useGetCustomersQuery,
    useGetTransactionsQuery,
    useGetGeographyQuery,
    useGetOverviewQuery,
    useGetAdminsQuery,
    useGetPerformanceQuery,
    useGetDashboardQuery,
}=api;