import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import ReactDOM from 'react-dom';

import React, { useState, useEffect } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';

const styles = {
    wrapper: 'mx-auto w-full p-4 flex flex-col shadow-lg rounded-md',
    feature: 'w-[100%] flex justify-between items-center gap-4 flex-wrap',
    selectGroup: 'flex w-[100%] items-center gap-4 sm:w-[70%]',
    select: 'px-4 py-2 rounded-md shadow-lg border w-[40%] sm: w-[30%]',
    btnAdd: 'px-4 py-2 rounded-md bg-[#5842BD] text-white flex items-center gap-2 shadow-lg select-none'
}


const Users = () => {
    const [customers, setCustomers] = useState(null);
    const [selectedCustomers, setSelectedCustomers] = useState(null);
    const [filters, setFilters] = useState({
        'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
        'name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'representative': { value: null, matchMode: FilterMatchMode.IN },
        'date': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
        'balance': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        'status': { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        'activity': { value: null, matchMode: FilterMatchMode.BETWEEN }
    });
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const representatives = [
        {name: "Amy Elsner", image: 'amyelsner.png'},
        {name: "Anna Fali", image: 'annafali.png'},
        {name: "Asiya Javayant", image: 'asiyajavayant.png'},
        {name: "Bernardo Dominic", image: 'bernardodominic.png'},
        {name: "Elwin Sharvill", image: 'elwinsharvill.png'},
        {name: "Ioni Bowcher", image: 'ionibowcher.png'},
        {name: "Ivan Magalhaes",image: 'ivanmagalhaes.png'},
        {name: "Onyama Limba", image: 'onyamalimba.png'},
        {name: "Stephen Shaw", image: 'stephenshaw.png'},
        {name: "XuXue Feng", image: 'xuxuefeng.png'}
    ];

    const statuses = [
        'unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'
    ];

    const [customers2, setCustomers2] = useState(null);

    useEffect(() => {
        setCustomers2([
            {
                id: "1000",
                "name": "Josephine Darakjy",
                "country": {
                    "name": "Algeria",
                    "code": "dz"
                },
                "company": "Benton, John B Jr",
                "date": "2015-09-13",
                "status": "unqualified",
                "verified": true,
                "activity": 17,
                "representative": {
                    "name": "Ioni Bowcher",
                    "image": "ionibowcher.png"
                },
                "balance": 70663,
                "email": "quockhanh123@gmail.com",
                "address": "289 Hoàng Văn Thụ",
                "phone": "0973256777",
                "myorder": "f230fh0g3",
                "createdBy": "Việt Hoàng",
                "password": "43987594754"
            },
            {
                id: "1001",
                "name": "Leota Dilliard",
                "country": {
                    "name": "Egypt",
                    "code": "eg"
                },
                "company": "Chanay, Jeffrey A Esq",
                "date": "2019-02-09",
                "status": "proposal",
                "verified": true,
                "activity": 0,
                "representative": {
                    "name": "Amy Elsner",
                    "image": "amyelsner.png"
                },
                "balance": 82429,
                "email": "hoaian123@gmail.com",
                "address": "289 Hoàng Văn Thụ",
                "phone": "0973256777",
                "myorder": "nvklal433",
                "createdBy": "Phạm Nam",
                "password": "43987597436"
            },
            {
                id: "1002",
                "name": "Art Venere",
                "country": {
                    "name": "Panama",
                    "code": "pa"
                },
                "company": "Chemel, James L Cpa",
                "date": "2017-05-13",
                "status": "qualified",
                "verified": false,
                "activity": 63,
                "representative": {
                    "name": "Asiya Javayant",
                    "image": "asiyajavayant.png"
                },
                "balance": 28334,
                "email": "quockhanh123@gmail.com",
                "address": "289 Hoàng Văn Thụ",
                "phone": "0973256777",
                "myorder": "nvklal433",
                "createdBy": "Việt Hoàng",
                "password": "43987594754"
            },
            {
                id: "1003",
                "name": "Lenna Paprocki",
                "country": {
                    "name": "Slovenia",
                    "code": "si"
                },
                "company": "Feltz Printing Service",
                "date": "2020-09-15",
                "status": "new",
                "verified": false,
                "activity": 37,
                "representative": {
                    "name": "Xuxue Feng",
                    "image": "xuxuefeng.png"
                },
                "balance": 88521,
                "email": "hoaian123@gmail.com",
                "address": "289 Hoàng Văn Thụ",
                "phone": "0973256777",
                "myorder": "nvklal433",
                "createdBy": "Phạm Nam",
                "password": "43987597436"
            },
            {
                id: "1004",
                "name": "Donette Foller",
                "country": {
                    "name": "South Africa",
                    "code": "za"
                },
                "company": "Printing Dimensions",
                "date": "2016-05-20",
                "status": "proposal",
                "verified": true,
                "activity": 33,
                "representative": {
                    "name": "Asiya Javayant",
                    "image": "asiyajavayant.png"
                },
                "balance": 93905,
                "email": "quockhanh123@gmail.com",
                "address": "289 Hoàng Văn Thụ",
                "phone": "0973256777",
                "myorder": "nvklal433",
                "createdBy": "Phạm Nam",
                "password": "43987597436"
            },
            {
                id: "1005",
                "name": "Simona Morasca",
                "country": {
                    "name": "Egypt",
                    "code": "eg"
                },
                "company": "Chapman, Ross E Esq",
                "date": "2018-02-16",
                "status": "qualified",
                "verified": false,
                "activity": 68,
                "representative": {
                    "name": "Ivan Magalhaes",
                    "image": "ivanmagalhaes.png"
                },
                "balance": 93905,
                "email": "hoaian123@gmail.com",
                "address": "289 Hoàng Văn Thụ",
                "phone": "0973256777",
                "myorder": "nvklal433",
                "createdBy": "Phạm Nam",
                "password": "43987597436"
            },
            {
                id: "1006",
                "name": "Mitsue Tollner",
                "country": {
                    "name": "Paraguay",
                    "code": "py"
                },
                "company": "Morlong Associates",
                "date": "2018-02-19",
                "status": "renewal",
                "verified": true,
                "activity": 54,
                "representative": {
                    "name": "Ivan Magalhaes",
                    "image": "ivanmagalhaes.png"
                },
                "balance": 93905,
                "email": "hoaian123@gmail.com",
                "address": "289 Hoàng Văn Thụ",
                "phone": "0973256777",
                "myorder": "nvklal433",
                "createdBy": "Phạm Nam",
                "password": "43987597436"
            },
            {
                id: "1007",
                "name": "Leota Dilliard",
                "country": {
                    "name": "Serbia",
                    "code": "rs"
                },
                "company": "Commercial Press",
                "date": "2019-08-13",
                "status": "renewal",
                "verified": true,
                "activity": 69,
                "representative": {
                    "name": "Onyama Limba",
                    "image": "onyamalimba.png"
                },
                "balance": 93905,
                "email": "hoaian123@gmail.com",
                "address": "289 Hoàng Văn Thụ",
                "phone": "0973256777",
                "myorder": "nvklal433",
                "createdBy": "Phạm Nam",
                "password": "43987597436"
            },
            {
                id: "1008",
                "name": "Sage Wieser",
                "country": {
                    "name": "Egypt",
                    "code": "eg"
                },
                "company": "Truhlar And Truhlar Attys",
                "date": "2018-11-21",
                "status": "unqualified",
                "verified": true,
                "activity": 76,
                "representative": {
                    "name": "Ivan Magalhaes",
                    "image": "ivanmagalhaes.png"
                },
                "balance": 93905,
                "email": "quockhanh123@gmail.com",
                "address": "289 Hoàng Văn Thụ",
                "phone": "0973256777",
                "myorder": "nvklal433",
                "createdBy": "Phạm Nam",
                "password": "43987597436"
            },
            {
                id: "1010",
                "name": "Kris Marrier",
                "country": {
                    "name": "Mexico",
                    "code": "mx"
                },
                "company": "King, Christopher A Esq",
                "date": "2015-07-07",
                "status": "proposal",
                "verified": false,
                "activity": 3,
                "representative": {
                    "name": "Onyama Limba",
                    "image": "onyamalimba.png"
                },
                "balance": 93905,
                "email": "quockhanh123@gmail.com",
                "address": "289 Hoàng Văn Thụ",
                "phone": "0973256777",
                "myorder": "nvklal433",
                "createdBy": "Phạm Nam",
                "password": "43987597436"
            },
            {
                id: "1011",
                "name": "Minna Amigon",
                "country": {
                    "name": "Romania",
                    "code": "ro"
                },
                "company": "Dorl, James J Esq",
                "date": "2018-11-07",
                "status": "qualified",
                "verified": false,
                "activity": 38,
                "representative": {
                    "name": "Anna Fali",
                    "image": "annafali.png"
                },
                "balance": 93905,
                "email": "quockhanh123@gmail.com",
                "address": "289 Hoàng Văn Thụ",
                "phone": "0973256777",
                "myorder": "nvklal433",
                "createdBy": "Phạm Nam",
                "password": "43987597436"
            },
            {
                id: "1012",
                "name": "Abel Maclead",
                "country": {
                    "name": "Singapore",
                    "code": "sg"
                },
                "company": "Rangoni Of Florence",
                "date": "2017-03-11",
                "status": "qualified",
                "verified": true,
                "activity": 87,
                "representative": {
                    "name": "Bernardo Dominic",
                    "image": "bernardodominic.png"
                },
                "balance": 93905,
                "email": "quockhanh123@gmail.com",
                "address": "289 Hoàng Văn Thụ",
                "phone": "0973256777",
                "myorder": "nvklal433",
                "createdBy": "Phạm Nam",
                "password": "43987597436"
            },
            {
                id: "1013",
                "name": "Kiley Caldarera",
                "country": {
                    "name": "Serbia",
                    "code": "rs"
                },
                "company": "Feiner Bros",
                "date": "2015-10-20",
                "status": "unqualified",
                "verified": false,
                "activity": 80,
                "representative": {
                    "name": "Onyama Limba",
                    "image": "onyamalimba.png"
                },
                "balance": 93905,
                "email": "quockhanh123@gmail.com",
                "address": "289 Hoàng Văn Thụ",
                "phone": "0973256777",
                "myorder": "nvklal433",
                "createdBy": "Phạm Nam",
                "password": "43987597436"
            },
            {
                id: "1014",
                "name": "Graciela Ruta",
                "country": {
                    "name": "Chile",
                    "code": "cl"
                },
                "company": "Buckley Miller & Wright",
                "date": "2016-07-25",
                "status": "negotiation",
                "verified": false,
                "activity": 59,
                "representative": {
                    "name": "Amy Elsner",
                    "image": "amyelsner.png"
                },
                "balance": 93905,
                "email": "quockhanh123@gmail.com",
                "address": "289 Hoàng Văn Thụ",
                "phone": "0973256777",
                "myorder": "nvklal433",
                "createdBy": "Phạm Nam",
                "password": "43987597436"
            },
            {
                id: "1015",
                "name": "Cammy Albares",
                "country": {
                    "name": "Philippines",
                    "code": "ph"
                },
                "company": "Rousseaux, Michael Esq",
                "date": "2019-06-25",
                "status": "new",
                "verified": true,
                "activity": 90,
                "representative": {
                    "name": "Asiya Javayant",
                    "image": "asiyajavayant.png"
                },
                "balance": 93905,
                "email": "quockhanh123@gmail.com",
                "address": "289 Hoàng Văn Thụ",
                "phone": "0973256777",
                "myorder": "nvklal433",
                "createdBy": "Phạm Nam",
                "password": "43987597436"
            },
            {
                id: "1016",
                "name": "Mattie Poquette",
                "country": {
                    "name": "Venezuela",
                    "code": "ve"
                },
                "company": "Century Communications",
                "date": "2017-12-12",
                "status": "negotiation",
                "verified": false,
                "activity": 52,
                "representative": {
                    "name": "Anna Fali",
                    "image": "annafali.png"
                },
                "balance": 93905,
                "email": "quockhanh123@gmail.com",
                "address": "289 Hoàng Văn Thụ",
                "phone": "0973256777",
                "myorder": "nvklal433",
                "createdBy": "Phạm Nam",
                "password": "43987597436"
            },
            {
                id: "1017",
                "name": "Meaghan Garufi",
                "country": {
                    "name": "Malaysia",
                    "code": "my"
                },
                "company": "Bolton, Wilbur Esq",
                "date": "2018-07-04",
                "status": "unqualified",
                "verified": false,
                "activity": 31,
                "representative": {
                    "name": "Ivan Magalhaes",
                    "image": "ivanmagalhaes.png"
                },
                "balance": 93905,
                "email": "quockhanh123@gmail.com",
                "phone": "0973256777",
                "myorder": "nvklal433",
                "createdBy": "Phạm Nam",
                "password": "43987597436"
            },
            {
                id: "1018",
                "name": "Gladys Rim",
                "country": {
                    "name": "Netherlands",
                    "code": "nl"
                },
                "company": "T M Byxbee Company Pc",
                "date": "2020-02-27",
                "status": "renewal",
                "verified": true,
                "activity": 48,
                "representative": {
                    "name": "Stephen Shaw",
                    "image": "stephenshaw.png"
                },
                "balance": 93905,
                "email": "quockhanh123@gmail.com",
                "address": "289 Hoàng Văn Thụ",
                "phone": "0973256777",
                "myorder": "nvklal433",
                "createdBy": "Phạm Nam",
                "password": "43987597436"
            },
            {
                id: "1019",
                "name": "Yuki Whobrey",
                "country": {
                    "name": "Israel",
                    "code": "il"
                },
                "company": "Farmers Insurance Group",
                "date": "2017-12-21",
                "status": "negotiation",
                "verified": true,
                "activity": 16,
                "representative": {
                    "name": "Bernardo Dominic",
                    "image": "bernardodominic.png"
                },
                "balance": 93905,
                "email": "quockhanh123@gmail.com",
                "address": "289 Hoàng Văn Thụ",
                "phone": "0973256777",
                "myorder": "nvklal433",
                "createdBy": "Phạm Nam",
                "password": "43987597436"
            },
            {
                id: "1020",
                "name": "Fletcher Flosi",
                "country": {
                    "name": "Argentina",
                    "code": "ar"
                },
                "company": "Post Box Services Plus",
                "date": "2016-01-04",
                "status": "renewal",
                "verified": true,
                "activity": 19,
                "representative": {
                    "name": "Xuxue Feng",
                    "image": "xuxuefeng.png"
                },
                "balance": 93905,
                "email": "quockhanh123@gmail.com",
                "address": "289 Hoàng Văn Thụ",
                "phone": "0973256777",
                "myorder": "nvklal433",
                "createdBy": "Phạm Nam",
                "password": "43987597436"
            },
            {
                id: "1021",
                "name": "Bette Nicka",
                "country": {
                    "name": "Paraguay",
                    "code": "py"
                },
                "company": "Sport En Art",
                "date": "2016-10-21",
                "status": "renewal",
                "verified": false,
                "activity": 100,
                "representative": {
                    "name": "Onyama Limba",
                    "image": "onyamalimba.png"
                },
                "balance": 93905,
                "email": "quockhanh123@gmail.com",
                "address": "289 Hoàng Văn Thụ",
                "phone": "0973256777",
                "myorder": "nvklal433",
                "createdBy": "Phạm Nam",
                "password": "43987597436"
            },
            {
                id: "1022",
                "name": "Veronika Inouye",
                "country": {
                    "name": "Ecuador",
                    "code": "ec"
                },
                "company": "C 4 Network Inc",
                "date": "2017-03-24",
                "status": "renewal",
                "verified": false,
                "activity": 72,
                "representative": {
                    "name": "Ioni Bowcher",
                    "image": "ionibowcher.png"
                },
                "balance": 93905,
                "email": "quockhanh123@gmail.com",
                "address": "289 Hoàng Văn Thụ",
                "phone": "0973256777",
                "myorder": "nvklal433",
                "createdBy": "Phạm Nam",
                "password": "43987597436"
            },
            {
                id: "1023",
                "name": "Willard Kolmetz",
                "country": {
                    "name": "Tunisia",
                    "code": "tn"
                },
                "company": "Ingalls, Donald R Esq",
                "date": "2017-04-15",
                "status": "renewal",
                "verified": true,
                "activity": 94,
                "representative": {
                    "name": "Asiya Javayant",
                    "image": "asiyajavayant.png"
                },
                "balance": 93905,
                "email": "quockhanh123@gmail.com",
                "address": "289 Hoàng Văn Thụ",
                "phone": "0973256777",
                "myorder": "nvklal433",
                "createdBy": "Phạm Nam",
                "password": "43987597436"
            },
            {
                id: "1024",
                "name": "Maryann Royster",
                "country": {
                    "name": "Belarus",
                    "code": "by"
                },
                "company": "Franklin, Peter L Esq",
                "date": "2017-03-11",
                "status": "qualified",
                "verified": false,
                "activity": 56,
                "representative": {
                    "name": "Elwin Sharvill",
                    "image": "elwinsharvill.png"
                },
                "balance": 93905,
                "email": "quockhanh123@gmail.com",
                "address": "289 Hoàng Văn Thụ",
                "phone": "0973256777",
                "myorder": "nvklal433",
                "createdBy": "Phạm Nam",
                "password": "43987597436"
            },
            {
                id: "1025",
                "name": "Alisha Slusarski",
                "country": {
                    "name": "Iceland",
                    "code": "is"
                },
                "company": "Wtlz Power 107 Fm",
                "date": "2018-03-27",
                "status": "qualified",
                "verified": true,
                "activity": 7,
                "representative": {
                    "name": "Stephen Shaw",
                    "image": "stephenshaw.png"
                },
                "balance": 93905,
                "email": "quockhanh123@gmail.com",
                "address": "289 Hoàng Văn Thụ",
                "phone": "0973256777",
                "myorder": "nvklal433",
                "createdBy": "Phạm Nam",
                "password": "43987597436"
            },
            {
                "id": 1025,
                "name": "Allene Iturbide",
                "country": {
                    "name": "Italy",
                    "code": "it"
                },
                "company": "Ledecky, David Esq",
                "date": "2016-02-20",
                "status": "qualified",
                "verified": true,
                "activity": 1,
                "representative": {
                    "name": "Ivan Magalhaes",
                    "image": "ivanmagalhaes.png"
                },
                "balance": 93905,
                "email": "quockhanh123@gmail.com",
                "address": "289 Hoàng Văn Thụ",
                "phone": "0973256777",
                "myorder": "nvklal433",
                "createdBy": "Phạm Nam",
                "password": "43987597436"
            },
            {
                id: "1026",
                "name": "Chanel Caudy",
                "country": {
                    "name": "Argentina",
                    "code": "ar"
                },
                "company": "Professional Image Inc",
                "date": "2018-06-24",
                "status": "new",
                "verified": true,
                "activity": 26,
                "representative": {
                    "name": "Ioni Bowcher",
                    "image": "ionibowcher.png"
                },
                "balance": 93905,
                "email": "quockhanh123@gmail.com",
                "address": "289 Hoàng Văn Thụ",
                "phone": "0973256777",
                "myorder": "nvklal433",
                "createdBy": "Phạm Nam",
                "password": "43987597436"
            },
            {
                id: "1027",
                "name": "Ezekiel Chui",
                "country": {
                    "name": "Ireland",
                    "code": "ie"
                },
                "company": "Sider, Donald C Esq",
                "date": "2016-09-24",
                "status": "new",
                "verified": false,
                "activity": 76,
                "representative": {
                    "name": "Amy Elsner",
                    "image": "amyelsner.png"
                },
                "balance": 93905,
                "email": "quockhanh123@gmail.com",
                "address": "289 Hoàng Văn Thụ",
                "phone": "0973256777",
                "myorder": "nvklal433",
                "createdBy": "Phạm Nam",
                "password": "43987597436"
            },
        ])
    }, []);

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };
        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    }

    const renderHeader = () => {
        return (
            <div className="flex justify-content-between align-items-center">
                <h5 className="m-0">Customers</h5>
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </span>
            </div>
        )
    }

    const nameBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <img alt="flag" src="images/flag/flag_placeholder.png" style={{ display: "inline", marginRight: "6px"}} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${rowData.country.code}`} width={28}  />
                <span className="image-text">{rowData.name}</span>
            </React.Fragment>
        );
    }

    const idBodyTemplate = (rowData) => {
        return (rowData.id);
    }

    const phoneBodyTemplate = (rowData) => {
        return (rowData.phone);
    }

    const createdByBodyTemplate = (rowData) => {
        return (rowData.createdBy);
    }

    const addressBodyTemplate = (rowData) => {
        return (rowData.address);
    }

    const balanceFilterTemplate = (options) => {
        return <InputNumber value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} mode="currency" currency="USD" locale="en-US" />
    }

    const header = renderHeader();

    const onRowEditComplete = (e) => {
        let _customers2 = [...customers2];
        let { newData, index } = e;

        _customers2[index] = newData;

        setCustomers2(_customers2);
    };

    const textEditor = (options) => {
        return (
            <InputText
                type="text"
                value={options.value}
                onChange={(e) => options.editorCallback(e.target.value)}
            />
        );
    };


    return (
        <div className={styles.wrapper}>
            <div>
                <DataTable value={customers2} paginator className="p-datatable-customers" header={header} rows={10}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" rowsPerPageOptions={[10,25,50]}
                    dataKey="id" rowHover selection={selectedCustomers} onSelectionChange={e => setSelectedCustomers(e.value)}
                    globalFilterFields={['name', 'country.name', 'representative.name', 'balance', 'status']} emptyMessage="No customers found."
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries" 
                    editMode="row"
                    onRowEditComplete={onRowEditComplete}
                    responsiveLayout="scroll"
                    >
                    <Column selectionMode="multiple" selectionAriaLabel="name" headerStyle={{ width: '1rem' }}></Column>
                    <Column field="id" header="ID" sortable dataType="id" style={{ minWidth: '6rem' }} editor={(options) => textEditor(options)} body={idBodyTemplate}/>
                    <Column field="name" header="Name" style={{ marginRight: "6rem"}} sortable filterPlaceholder="Search by name" editor={(options) => textEditor(options)} body={nameBodyTemplate} />
                    <Column field="address" header="Address" sortable filterMenuStyle={{ width: '10rem' }} style={{ minWidth: '8rem' }} editor={(options) => textEditor(options)} body={addressBodyTemplate} />
                    <Column field="createdBy" header="CreatedBy" sortable dataType="createby" style={{ minWidth: '6rem' }} body={createdByBodyTemplate} editor={(options) => textEditor(options)} filterElement={balanceFilterTemplate} />
                    <Column field="phone" header="Phone" sortable dataType="phone" style={{ minWidth: '6rem' }} body={phoneBodyTemplate} editor={(options) => textEditor(options)} filterElement={balanceFilterTemplate} />
                    <Column field="password" header="Password" sortable filterField="password" dataType="password" editor={(options) => textEditor(options)} style={{ Width: '4rem' }}  />
                    <Column field="myorder" header="MyOrder" sortable filterField="myorder" dataType="myorder" editor={(options) => textEditor(options)} style={{ Width: '4rem' }}  />
                    <Column
                        rowEditor
                        headerStyle={{ width: "10%", minWidth: "8rem" }}
                        bodyStyle={{ textAlign: "center" }}
                    ></Column>
                </DataTable>
            </div>
        </div>
    );
}
export default Users;