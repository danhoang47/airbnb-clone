import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { faBars, faCircleUser } from '@fortawesome/free-solid-svg-icons';

import { Menu, MenuButton, MenuItem, MenuList } from "@component/menu";
import Icon from '@component/icon';
import clsx from "@utils/clsx";

import "./styles.scss";

function ProfileMenuItem() {
	const navigate = useNavigate();
	const options = useMemo(
		() => [
			{
				id: 1,
				title: "Đăng nhập",
				style: "font-bold",
				onOptionClick: () => {},
			},
			{
				id: 2,
				title: "Đăng ký",
				style: "",
				onOptionClick: () => {},
			},
			{
				id: 3,
				title: "Cho thuê chỗ ở qua Airbnb",
				style: "",
				onOptionClick: () => {},
			},
			{
				id: 4,
				title: "Tổ chức trải nghiệm",
				style: "",
				onOptionClick: () => {},
			},
		],
		[]
	);

	return (
		<div className="profile-menu-item">
			<Menu>
				<MenuButton toggle="box-shadow">
                    <Icon icon={faBars}/>
                    <Icon icon={faCircleUser} />
                </MenuButton>
				<MenuList>
					{options.map(({ id, title, style, onOptionClick }) => (
						<MenuItem
							key={id}
							classNames={style}
							onClick={onOptionClick}
						>
							{title}
						</MenuItem>
					))}
				</MenuList>
			</Menu>
		</div>
	);
}

export default ProfileMenuItem;
