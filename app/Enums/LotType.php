<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

final class LotType extends Enum
{
    const Card = 0;
    const Item = 1;
    const Money = 2;
}
