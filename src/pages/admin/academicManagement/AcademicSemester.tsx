import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";

import { Button, Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import { semesterAllYear, semesterMonths, semesterNames } from "../../../const/academicSemester.const";
import { TAcademicSemester, TQueryParams } from "../../../types";
import { useState } from "react";

type TTableData = Pick<TAcademicSemester, '_id' | 'name' | 'year' | 'startMonth' | 'endMonth'>

export default function AcademicSemester() {
    const [params, setParams] = useState<TQueryParams[] | undefined>(undefined)
    const { data: semesterData, isLoading, isFetching, error } = useGetAllSemestersQuery(params);


    if (isLoading) {
        return ''
    }

    const columns: TableColumnsType<TTableData> = [
        {
            title: 'Name',
            dataIndex: 'name',
            showSorterTooltip: { target: 'full-header' },
            filters: semesterNames.map(item => ({ text: item, value: item })),
            sorter: (a, b) => a.name.length - b.name.length,
            sortDirections: ['descend'],
        },
        {
            title: 'Year',
            dataIndex: 'year',
            filters: semesterAllYear.map(item => ({ text: item, value: item })),
        },
        {
            title: 'Start Month',
            dataIndex: 'startMonth',
            filters: semesterMonths.map(item => ({ text: item, value: item })),
        },
        {
            title: 'End Month',
            dataIndex: 'endMonth',
            filters: semesterMonths.map(item => ({ text: item, value: item })),
        },
        {
            title: 'Action',
            key: 'x',
            render: () => {
                return <div><Button>Update</Button></div>
            }
        }
    ];

    const tableData = semesterData?.data?.map(({ _id, name, year, startMonth, endMonth }) => ({
        _id,
        key: _id,
        name,
        year,
        startMonth,
        endMonth
    }))

    const onChange: TableProps<TTableData>['onChange'] = (_pagination, filters, _sorter, extra) => {
        if (extra.action === 'filter') {
            const queryParams: TQueryParams[] = [];
            filters?.name?.forEach(item => (queryParams.push({ name: 'name', value: item })))
            filters?.year?.forEach(item => (queryParams.push({ name: 'year', value: item })))
            filters?.startMonth?.forEach(item => (queryParams.push({ name: 'startMonth', value: item })))
            filters?.endMonth?.forEach(item => (queryParams.push({ name: 'endMonth', value: item })))
            setParams(queryParams)
        }
    };

    return (
        <div>
            <Table<TTableData>
                loading={isFetching}
                columns={columns}
                dataSource={tableData}
                onChange={onChange}
                showSorterTooltip={{ target: 'sorter-icon' }}
            />
        </div>
    );
}