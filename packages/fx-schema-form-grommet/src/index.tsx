import React from "react";
import ReactDOM from "react-dom";
import App from "grommet/components/App";
import Title from "grommet/components/title";
import Header from "grommet/components/Header";
import Box from "grommet/components/box";
import Menu from "grommet/components/menu";
import Search from "grommet/components/search";
import Anchor from "grommet/components/anchor";
import Footer from "grommet/components/footer";
import Label from "grommet/components/label";
import CloudIcon from "grommet/components/icons/base/cloud";
import CloseIcon from "grommet/components/icons/base/close";
import Button from "grommet/components/button";
import Sidebar from "grommet/components/sidebar";
import Article from "grommet/components/article";
import Section from "grommet/components/section";
import Split from "grommet/components/split";
import Heading from "grommet/components/heading";

import "grommet-css";

ReactDOM.render(
    <App centered={false}>
        <Split priority="left" flex="right">
            <Box pad="none">
                <Sidebar >
                    <Header pad="medium">
                        <Title>
                            <CloudIcon />
                            云平台
                        </Title>
                    </Header>
                    <Box flex="grow"
                        justify="start">
                        <Menu primary={true}>
                            <Anchor href="#"
                                className="active">
                                First
                            </Anchor>
                            <Anchor href="#">
                                Second
                            </Anchor>
                            <Anchor href="#">
                                Third
                            </Anchor>
                        </Menu>
                    </Box>
                    <Footer pad="medium">
                        UserInfo
                    </Footer>
                </Sidebar>
            </Box>
            <Box colorIndex="neutral-2"
                pad="medium">
                Right Side
            </Box>
        </Split>
    </App>,
    document.getElementById("root"),
    () => {
        console.log("form ok!");
    });

