package core_test

import (
	"testing"

	keepertest "crudechain/testutil/keeper"
	"crudechain/testutil/nullify"
	core "crudechain/x/core/module"
	"crudechain/x/core/types"

	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.CoreKeeper(t)
	core.InitGenesis(ctx, k, genesisState)
	got := core.ExportGenesis(ctx, k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
