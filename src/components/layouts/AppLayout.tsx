import { Box } from "@mui/material";
import { Container } from "@mui/material";
import styled from "@emotion/styled";

type AppLayoutProps = {
    children: React.ReactNode;
};

export const MainLayout = styled(Box)({
    width: "100%",
    backgroundColor: "lightgray",
    display: "flex",
    height: "800px",
    padding: "20px",
});

export const AppLayout = ({ children }: AppLayoutProps) => {
    return (
        <Container className="App" maxWidth="xl">
            <MainLayout>{children}</MainLayout>
        </Container>
    );
};
