package keeper

import (
	"context"

	"crudechain/x/core/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreateResource(goCtx context.Context, msg *types.MsgCreateResource) (*types.MsgCreateResourceResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	var Resource = types.Resource{
		Name:        msg.Name,
		Description: msg.Description,
		Owner:       msg.Creator,
	}
	id := k.AppendResource(ctx, Resource)

	return &types.MsgCreateResourceResponse{
		Id: id,
	}, nil
}
