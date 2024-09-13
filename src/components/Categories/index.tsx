import { Grid, GridItem } from '@chakra-ui/react';

import Category from './Category';

export default function Categories() {
  return (
    <Grid
      templateColumns={['1fr 1fr', '1fr 1fr', '1fr 1fr', 'repeat(5, 1fr)']}
      w="100%"
      justify="space-between"
      align="center"
      mt={['10', '32']}
      mx="auto"
      maxW="1160px"
      flexWrap="wrap"
      gap={[1, 5]}
    >
      <GridItem>
        <Category image="cocktail" text="vida noturna" />
      </GridItem>
      <GridItem>
        <Category image="surf" text="praia" />
      </GridItem>
      <GridItem>
        <Category image="building" text="moderno" />
      </GridItem>
      <GridItem>
        <Category image="museum" text="clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <Category image="earth" text="e mais..." />
      </GridItem>
    </Grid>
  );
}
