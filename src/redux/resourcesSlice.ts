import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ResourceCount = {
    blue: number;
    red: number;
    orange: number;
    white: number;
};

type ResourcesState = {
    [key: string]: {
        brick: ResourceCount;
        grain: ResourceCount;
        lumber: ResourceCount;
        ore: ResourceCount;
        wool: ResourceCount;
    };
};

const initialState: ResourcesState = {
    2: { brick: { blue: 0, red: 0, orange: 0, white: 0 }, grain: { blue: 0, red: 0, orange: 0, white: 0 }, lumber: { blue: 0, red: 0, orange: 0, white: 0 }, ore: { blue: 0, red: 0, orange: 0, white: 0 }, wool: { blue: 0, red: 0, orange: 0, white: 0 } },
    3: { brick: { blue: 0, red: 0, orange: 0, white: 0 }, grain: { blue: 0, red: 0, orange: 0, white: 0 }, lumber: { blue: 0, red: 0, orange: 0, white: 0 }, ore: { blue: 0, red: 0, orange: 0, white: 0 }, wool: { blue: 0, red: 0, orange: 0, white: 0 } },
    4: { brick: { blue: 0, red: 0, orange: 0, white: 0 }, grain: { blue: 0, red: 0, orange: 0, white: 0 }, lumber: { blue: 0, red: 0, orange: 0, white: 0 }, ore: { blue: 0, red: 0, orange: 0, white: 0 }, wool: { blue: 0, red: 0, orange: 0, white: 0 } },
    5: { brick: { blue: 0, red: 0, orange: 0, white: 0 }, grain: { blue: 0, red: 0, orange: 0, white: 0 }, lumber: { blue: 0, red: 0, orange: 0, white: 0 }, ore: { blue: 0, red: 0, orange: 0, white: 0 }, wool: { blue: 0, red: 0, orange: 0, white: 0 } },
    6: { brick: { blue: 0, red: 0, orange: 0, white: 0 }, grain: { blue: 0, red: 0, orange: 0, white: 0 }, lumber: { blue: 0, red: 0, orange: 0, white: 0 }, ore: { blue: 0, red: 0, orange: 0, white: 0 }, wool: { blue: 0, red: 0, orange: 0, white: 0 } },
    7: { brick: { blue: 0, red: 0, orange: 0, white: 0 }, grain: { blue: 0, red: 0, orange: 0, white: 0 }, lumber: { blue: 0, red: 0, orange: 0, white: 0 }, ore: { blue: 0, red: 0, orange: 0, white: 0 }, wool: { blue: 0, red: 0, orange: 0, white: 0 } },
    8: { brick: { blue: 0, red: 0, orange: 0, white: 0 }, grain: { blue: 0, red: 0, orange: 0, white: 0 }, lumber: { blue: 0, red: 0, orange: 0, white: 0 }, ore: { blue: 0, red: 0, orange: 0, white: 0 }, wool: { blue: 0, red: 0, orange: 0, white: 0 } },
    9: { brick: { blue: 0, red: 0, orange: 0, white: 0 }, grain: { blue: 0, red: 0, orange: 0, white: 0 }, lumber: { blue: 0, red: 0, orange: 0, white: 0 }, ore: { blue: 0, red: 0, orange: 0, white: 0 }, wool: { blue: 0, red: 0, orange: 0, white: 0 } },
    10: { brick: { blue: 0, red: 0, orange: 0, white: 0 }, grain: { blue: 0, red: 0, orange: 0, white: 0 }, lumber: { blue: 0, red: 0, orange: 0, white: 0 }, ore: { blue: 0, red: 0, orange: 0, white: 0 }, wool: { blue: 0, red: 0, orange: 0, white: 0 } },
    11: { brick: { blue: 0, red: 0, orange: 0, white: 0 }, grain: { blue: 0, red: 0, orange: 0, white: 0 }, lumber: { blue: 0, red: 0, orange: 0, white: 0 }, ore: { blue: 0, red: 0, orange: 0, white: 0 }, wool: { blue: 0, red: 0, orange: 0, white: 0 } },
    12: { brick: { blue: 0, red: 0, orange: 0, white: 0 }, grain: { blue: 0, red: 0, orange: 0, white: 0 }, lumber: { blue: 0, red: 0, orange: 0, white: 0 }, ore: { blue: 0, red: 0, orange: 0, white: 0 }, wool: { blue: 0, red: 0, orange: 0, white: 0 } },
};

type UpdateResourceAction = {
    row: string;
    resource: keyof ResourcesState[2];
    color: keyof ResourceCount;
    value: number;
};

export const resourcesSlice = createSlice({
    name: 'resources',
    initialState,
    reducers: {
        updateResource: (state, action: PayloadAction<UpdateResourceAction>) => {
            const { row, resource, color, value } = action.payload;
            state[row][resource][color] = value;
        }
    }
});

export const { updateResource } = resourcesSlice.actions;
export default resourcesSlice.reducer;