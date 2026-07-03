import { NumberInput, Popover, Switch, Text, Tooltip, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import {
  IconClock,
  IconLeaf,
  IconLeafOff,
  IconSnowflake,
  IconSunHigh,
  IconToolsKitchen2,
} from "@tabler/icons-react";
import classes from "./Icons.module.css";
import { useEffect, useState } from "react";
import { Recipe } from "../RecipeFilters/Types";

// recipe page

type MakeItVeganToggleProps = {
  recipe: Recipe;
  isVeganToggle: boolean;
  setIsVeganToggle: (v: boolean) => void;
};

function MakeItVeganToggle({ recipe, isVeganToggle, setIsVeganToggle }: MakeItVeganToggleProps) {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const [popoverOpened, setPopoverOpened] = useState(false);

  useEffect(() => {
    if (!isVeganToggle) return;
    setPopoverOpened(true);
    const timer = setTimeout(() => setPopoverOpened(false), 3000);
    return () => clearTimeout(timer);
  }, [isVeganToggle]);

  const veganTooltip =
    isVeganToggle && recipe.filters.dietaries.veganFriendly
      ? "Remove vegan modifications"
      : "Make it vegan";
  return (
    <Popover
      width={200}
      position="bottom"
      withArrow
      shadow="md"
      opened={popoverOpened}
      onDismiss={() => setPopoverOpened(false)}
      transitionProps={{ transition: "fade", duration: 400 }}
    >
      <Popover.Target>
        <Tooltip label={veganTooltip} refProp="rootRef" position="top" disabled={isMobile}>
          <Switch
            size="lg"
            color="var(--mantine-color-green-4)"
            onLabel={<IconLeafOff color="var(--mantine-color-dark-5)" />}
            offLabel={<IconLeaf color="var(--mantine-color-green-6)" />}
            withThumbIndicator={false}
            checked={isVeganToggle}
            onChange={(event) => setIsVeganToggle(event.currentTarget.checked)}
          />
        </Tooltip>
      </Popover.Target>
      {recipe.filters.dietaries.veganFriendly && isVeganToggle ? (
        <Popover.Dropdown>
          <Text size="sm">{recipe.filters.dietaries.makeItVegan.instructions}</Text>
        </Popover.Dropdown>
      ) : (
        <></>
      )}
    </Popover>
  );
}

function SnowflakeIcon2(freezable: boolean) {
  if (freezable) {
    return (
      <div>
        <Tooltip label="Freezable">
          <IconSnowflake className={classes.icons2} />
        </Tooltip>
      </div>
    );
  }
}

type ServesProps = {
  serves: number;
  servesValue: number;
  setServesValue: (v: number) => void;
};

function ServesIcon2({ serves, servesValue, setServesValue }: ServesProps) {
  return (
    <Tooltip label={`Makes ${servesValue} portions`}>
      <div className={classes.servesGroup}>
        <IconToolsKitchen2 className={classes.icons2} />
        <NumberInput
          aria-label="Number of portions"
          // description="Input description"
          className={classes.numberInput}
          defaultValue={serves}
          min={1}
          max={50}
          allowDecimal={false}
          value={servesValue}
          onChange={(val) => {
            if (typeof val === "number") setServesValue(val);
          }}
        />
      </div>
    </Tooltip>
  );
}

function TimeIcon2(time: string) {
  return (
    <Tooltip label={`Takes ${time.toLowerCase()} to cook`}>
      <div className={classes.timeGroup}>
        <IconClock className={classes.icons2} />
        <Text className={classes.text}>{time.toLowerCase()}</Text>
      </div>
    </Tooltip>
  );
}

function VeganFriendlyIcon2({ recipe, isVeganToggle, setIsVeganToggle }: MakeItVeganToggleProps) {
  if (recipe.filters.dietaries.veganFriendly) {
    return (
      <MakeItVeganToggle
        recipe={recipe}
        isVeganToggle={isVeganToggle}
        setIsVeganToggle={setIsVeganToggle}
      />
    );
  }
}

function HotWeatherFriendlyIcon2(hotWeatherFriendly: boolean) {
  if (hotWeatherFriendly) {
    return <IconSunHigh className={classes.icons2} />;
  }
}

type IconsProps = {
  recipe: Recipe;
  serves: number;
  servesValue: number;
  setServesValue: (v: number) => void;
  isVeganToggle: boolean;
  setIsVeganToggle: (v: boolean) => void;
};

export function Icons2({
  recipe,
  servesValue,
  setServesValue,
  isVeganToggle,
  setIsVeganToggle,
}: IconsProps) {
  const { serves } = recipe;
  return (
    <>
      {ServesIcon2({ serves, servesValue, setServesValue })}
      {TimeIcon2(recipe.time)}
      {SnowflakeIcon2(recipe.filters.attributes.freezable)}
      {HotWeatherFriendlyIcon2(recipe.filters.attributes.hotWeatherFriendly)}
      <VeganFriendlyIcon2
        recipe={recipe}
        isVeganToggle={isVeganToggle}
        setIsVeganToggle={setIsVeganToggle}
      />
    </>
  );
}

// home page

function SnowflakeIcon(freezable: boolean) {
  if (freezable) {
    return (
      <div>
        <Tooltip label="Freezable">
          <IconSnowflake size={40} stroke={1.5} className={classes.icons} />
        </Tooltip>
      </div>
    );
  }
}

function HotWeatherFriendlyIcon(hotWeatherFriendly: boolean) {
  if (hotWeatherFriendly) {
    return (
      <div>
        <Tooltip label="Hot weather friendly">
          <IconSunHigh size={40} stroke={1.5} className={classes.icons} />
        </Tooltip>
      </div>
    );
  }
}

function VeganFriendlyIcon(veganFriendly: boolean) {
  if (veganFriendly) {
    return (
      <div>
        <Tooltip label="possibility to make it vegan">
          <IconLeaf size={40} stroke={1.5} className={classes.icons} />
        </Tooltip>
      </div>
    );
  }
}

export function Icons({ recipe }: { recipe: Recipe }) {
  return (
    <>
      {SnowflakeIcon(recipe.filters.attributes.freezable)}
      {HotWeatherFriendlyIcon(recipe.filters.attributes.hotWeatherFriendly)}
      {VeganFriendlyIcon(recipe.filters.dietaries.veganFriendly)}
    </>
  );
}
