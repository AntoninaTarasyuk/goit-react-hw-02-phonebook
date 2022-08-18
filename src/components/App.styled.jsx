import styled from "@emotion/styled";

export const Section = styled.section`
  padding: ${p => p.theme.space[4]}px 0;
`
export const Container = styled.div`
  width: 312px;
  margin: 0 auto;
  padding: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.sm};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.16), 0 1px 2px rgba(0, 0, 0, 0.23);
`
export const H1 = styled.h1`
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.primary};
`
export const H2 = styled.h2`
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.primary};
`
export const InfoMessage = styled.p`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.s};
`