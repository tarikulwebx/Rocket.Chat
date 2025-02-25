import { css } from '@rocket.chat/css-in-js';
import { Box, SidebarDivider, Palette, SidebarFooter as Footer } from '@rocket.chat/fuselage';
import { useSetting } from '@rocket.chat/ui-contexts';
import { useThemeMode } from '@rocket.chat/ui-theming/src/hooks/useThemeMode';
import type { ReactElement } from 'react';
import React from 'react';

// import { SidebarFooterWatermark } from '../../../ee/client/sidebar/footer/SidebarFooterWatermark';

const SidebarFooterDefault = (): ReactElement => {
	const [, , theme] = useThemeMode();
	const logo = String(useSetting(theme === 'dark' ? 'Layout_Sidenav_Footer_Dark' : 'Layout_Sidenav_Footer')).trim();

	const sidebarFooterStyle = css`
		& img {
			max-width: 100%;
			height: 100%;
		}

		& a:any-link {
			color: ${Palette.text['font-info']};
		}
	`;

	return (
		<Footer>
			<SidebarDivider />
			<Box
				is='footer'
				pb={12}
				pi={16}
				height='x48'
				width='auto'
				className={sidebarFooterStyle}
				dangerouslySetInnerHTML={{
					__html: logo,
				}}
			/>
			{/* <SidebarFooterWatermark /> */}
			<h1 style={{padding: "0 16px 10px"}}>Custom text!</h1>
		</Footer>
	);
};

export default SidebarFooterDefault;
