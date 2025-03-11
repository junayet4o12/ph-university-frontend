import { useState } from "react";
import { TQueryParams } from "../../../types";
import { Button, Table, TableColumnsType, TableProps } from "antd";
import { useGetAllAcademicDepartmentQuery, useGetAllAcademicFacultyQuery } from "../../../redux/features/admin/academicManagement.api";

type TTableData = {
  _id: string;
  name: string;
  academicFaculty: string;
}
export default function AcademicDepartment() {
  const [params, setParams] = useState<TQueryParams[] | undefined>(undefined)
  const { data: academicDepartment, isLoading: departmentLoading, isFetching: departmentFetching } = useGetAllAcademicDepartmentQuery(params);
  const { data: semesterFaculty, isLoading: semesterLoading } = useGetAllAcademicFacultyQuery(params);

  if (departmentLoading || semesterLoading) {
    return ''
  }

  const columns: TableColumnsType<TTableData> = [
    {
      title: 'Name',
      dataIndex: 'name',
      showSorterTooltip: { target: 'full-header' },
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: 'Faculty',
      dataIndex: 'academicFaculty',
      filters: (semesterFaculty?.data || []).map(item => ({ text: item?.name, value: item?._id })),
    },
    {
      title: 'Action',
      key: 'x',
      render: () => {
        return <div><Button>Update</Button></div>
      }
    }
  ];
  const tableData = academicDepartment?.data?.map(({ _id, name, academicFaculty }) => ({
    _id,
    key: _id,
    name,
    academicFaculty: academicFaculty.name
  }))

  const onChange: TableProps<TTableData>['onChange'] = (_pagination, filters, _sorter, extra) => {
    if (extra.action === 'filter') {
      const queryParams: TQueryParams[] = [];
      filters?.academicFaculty?.forEach(item => (queryParams.push({ name: 'academicFaculty', value: item })))
      setParams(queryParams)
    }
  };
  return (
    <Table<TTableData>
      loading={departmentFetching}
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
      showSorterTooltip={{ target: 'sorter-icon' }}
    />
  );
}