import React from 'react';

import { ICounter } from 'types/TypesBase';

import './headerList.scss';

const HeaderList = ({found}: ICounter) => {
	const date = new Date().toLocaleDateString();

	return (
		<div className="headerlist">
			<div className="headerlist__news">Новостей найдено: {found} </div>
			<div className="headerlist__news">Дата: {date}</div>
		</div>
	)
}

export default HeaderList;