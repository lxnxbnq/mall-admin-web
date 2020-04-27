// 用户
import * as React from 'react';
import UserTable from './components/userTable';
import FieldsSearch, { FieldType } from '@src/components/Search';

const fieldsConfig: FieldType[] = [
	{
		type: 'input',
		label: '输入搜索',
		name: 'name',
		props: {
			placeholder: '账号/姓名',
		},
	},
];

const MenuPage = () => {
	const onSearch = () => {};
	return (
		<div>
			<FieldsSearch data={fieldsConfig} onSearch={onSearch} />
			<UserTable />
		</div>
	);
};

export default MenuPage;
