package keeper

import (
	"crudechain/x/core/types"
)

var _ types.QueryServer = Keeper{}
