// 品牌
import * as React from 'react';
import BrandTable from './components/brandTable';
import FieldsSearch, { FieldType } from '@src/components/Search';
import Operate from '@src/components/operate';

const fieldsConfig: FieldType[] = [
	{
		type: 'input',
		label: '品牌名称',
		name: 'name',
		props: {
			placeholder: '品牌名称',
		},
	},
	{
		type: 'select',
		label: '推荐状态',
		name: 'status',
		options: [
			{
				id: 1,
				value: '1',
				name: '未推荐',
			},
			{
				id: 2,
				value: '2',
				name: '推荐中',
			},
		],
		props: {
			placeholder: '全部',
		},
	},
];

const BrandPage = () => {
	const onSearch = () => {};
	return (
		<div>
			<FieldsSearch data={fieldsConfig} onSearch={onSearch} />
			<Operate
				conditions={[
					{
						value: 1,
						name: '商品上架',
					},
					{
						value: 2,
						name: '商品下架',
					},
				]}
			/>
			<BrandTable />
		</div>
	);
};

export default BrandPage;
