import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import CancelIcon from "@material-ui/icons/Cancel";

const useStyles = makeStyles({
	list: {
		width: 320,
	},
	fullList: {
		width: "auto",
	},
});

function Sidebar() {
	const classes = useStyles();
	const [state, setState] = React.useState({
		right: false,
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = (anchor) => (
		<div
			className={clsx(classes.list)}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				<CancelIcon className="crossISidebar" style={{ fontSize: "4.2rem" }} />
				<ListItem button>
					<ListItemText>About</ListItemText>
				</ListItem>
				<ListItem button>
					<ListItemText>My Projects</ListItemText>
				</ListItem>
				<ListItem button>
					<ListItemText>Experience</ListItemText>
				</ListItem>
				<ListItem button>
					<ListItemText>Contact</ListItemText>
				</ListItem>
			</List>
		</div>
	);

	return (
		<div>
			{["right"].map((anchor) => (
				<React.Fragment key={anchor}>
					<MenuIcon
						onClick={toggleDrawer(anchor, true)}
						style={{ color: "white", fontSize: "2.8rem", cursor: "pointer" }}
					/>
					<Drawer
						anchor={anchor}
						open={state[anchor]}
						onClose={toggleDrawer(anchor, false)}
					>
						{list(anchor)}
					</Drawer>
				</React.Fragment>
			))}
		</div>
	);
}

export default Sidebar;
