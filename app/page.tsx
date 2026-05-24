"use client";

import GroupButton from "@/components/ui/button/groupButton/groupButton";
import IconButton from "@/components/ui/button/iconButton/iconButton";
import StandardButton from "@/components/ui/button/standardButton/standarButton";
import { CheckIcon, MoonIcon, SunIcon, TrashIcon } from "@phosphor-icons/react";
import { useState } from "react";

export default function Home() {
  const [mode2, setMode2] = useState(false);
  const [size, setSize] = useState<"m" | "s" | "xs">("m")
  const [leadingIcon, setLeadingIcon] = useState(false);
  const [trailingIcon, setTrailingIcon] = useState(false);
  const [badge, setBadge] = useState(false);
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="home" data-mode={mode2 ? 'mode-2' : undefined}>
      <main className="main">
        <div className="standard">
          <IconButton variant="primary" icon={<SunIcon />} disabled={!mode2} onClick={() => setMode2(false)} />
          <IconButton variant="primary" icon={<MoonIcon />} disabled={mode2} onClick={() => setMode2(true)} />
          <select className="select" name="standard-select-size" id="standard-select-size" onChange={(e) => setSize(e.target.value as "m" | "s" | "xs")}>
            <option value="m">m</option>
            <option value="s">s</option>
            <option value="xs">xs</option>
          </select>
        </div>
        <div className="standard">
          <StandardButton size={size} variant="primary" leadingIcon={leadingIcon && <CheckIcon />} trailingIcon={trailingIcon && <TrashIcon />} badge={badge ? "2" : undefined} disabled={disabled}>Standard</StandardButton>
          <StandardButton size={size} variant="secondary" leadingIcon={leadingIcon && <CheckIcon />} trailingIcon={trailingIcon && <TrashIcon />} badge={badge ? "2" : undefined} disabled={disabled}>Standard</StandardButton>
          <StandardButton size={size} variant="ghost" leadingIcon={leadingIcon && <CheckIcon />} trailingIcon={trailingIcon && <TrashIcon />} badge={badge ? "2" : undefined} disabled={disabled}>Standard</StandardButton>
          <StandardButton size={size} variant="destructive" leadingIcon={leadingIcon && <CheckIcon />} trailingIcon={trailingIcon && <TrashIcon />} badge={badge ? "2" : undefined} disabled={disabled}>Standard</StandardButton>
        </div>
        <div className="standard">
          <GroupButton size={size} variant="primary" leadingIcon={leadingIcon && <CheckIcon />}  trailingIcon={trailingIcon && <TrashIcon />} badge={badge ? "2" : undefined} secondButtonIcon={<CheckIcon />} disabled={disabled}>Groupe</GroupButton>
          <GroupButton size={size} variant="secondary" leadingIcon={leadingIcon && <CheckIcon />} trailingIcon={trailingIcon && <TrashIcon />} badge={badge ? "2" : undefined} secondButtonIcon={<CheckIcon />} disabled={disabled}>Groupe</GroupButton>
          <GroupButton size={size} variant="destructive" leadingIcon={leadingIcon && <CheckIcon />} trailingIcon={trailingIcon && <TrashIcon />} badge={badge ? "2" : undefined} secondButtonIcon={<CheckIcon />} disabled={disabled}>Groupe</GroupButton>
        </div>
        <div className="standard">
          <IconButton variant="primary" icon={<TrashIcon />} disabled={disabled} />
          <IconButton variant="secondary" icon={<TrashIcon />} disabled={disabled} />
          <IconButton variant="alpha-light" icon={<TrashIcon />} disabled={disabled} />
          <IconButton variant="alpha-dark" icon={<TrashIcon />} disabled={disabled} />
        </div>
        <div className="standard">
          <div className="checkbox">
            <label htmlFor="leadingIcon" className="label">
              leadingIcon: 
              <input type="checkbox" name="leadingIcon" checked={leadingIcon} onChange={() => setLeadingIcon(!leadingIcon)} />
            </label>
          </div>
          <div>
            <label htmlFor="trailingIcon" className="label">
              trailingIcon: 
              <input type="checkbox" name="trailingIcon" checked={trailingIcon} onChange={() => setTrailingIcon(!trailingIcon)} />
            </label>
          </div>
          <div>
            <label htmlFor="badge" className="label">
              badge: 
              <input type="checkbox" name="badge" checked={badge} onChange={() => setBadge(!badge)} />
            </label>
          </div>
          <div>
            <label htmlFor="disabled" className="label">
              disabled: 
              <input type="checkbox" name="disabled" checked={disabled} onChange={() => setDisabled(!disabled)} />
            </label>
          </div>
        </div>
      </main>
    </div>
  );
}
